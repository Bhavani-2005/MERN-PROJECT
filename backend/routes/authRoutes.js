const express =
  require("express");

const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const {
  OAuth2Client,
} = require(
  "google-auth-library"
);

const User =
  require("../models/User");

const router =
  express.Router();

/* GOOGLE CLIENT */

const client =
  new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
  );

/* REGISTER */

router.post(
  "/register",

  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
        role,
        cluster,
      } = req.body;

      /* CHECK USER */

      const existingUser =
        await User.findOne({
          email,
        });

      if (existingUser) {

        return res
          .status(400)
          .json({
            message:
              "User already exists",
          });
      }

      /* HASH PASSWORD */

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      /* CREATE USER */

      const user =
        await User.create({

          name,

          email,

          password:
            hashedPassword,

          role:
            role ||
            "artisan",

          cluster,
        });

      /* LIVE SOCKET */

      const allUsers =
        await User.find();

      if (req.io) {

        req.io.emit(
          "artisanRegistered",
          allUsers
        );
      }

      res.json({

        message:
          "User registered successfully",

        user,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);

/* LOGIN */

router.post(
  "/login",

  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      /* FIND USER */

      const user =
        await User.findOne({
          email,
        });

      if (!user) {

        return res
          .status(400)
          .json({
            message:
              "Invalid email",
          });
      }

      /* CHECK PASSWORD */

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {

        return res
          .status(400)
          .json({
            message:
              "Invalid password",
          });
      }

      /* TOKEN */

      const token =
        jwt.sign(

          {
            id: user._id,

            role:
              user.role,
          },

          process.env.JWT_SECRET ||
          "smartartisansecret",

          {
            expiresIn:
              "7d",
          }
        );

      res.json({

        token,

        user: {

          id:
            user._id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,
        },
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);

/* GOOGLE LOGIN */

router.post(
  "/google",

  async (req, res) => {

    try {

      const {
        credential,
      } = req.body;

      /* VERIFY TOKEN */

      const ticket =
        await client.verifyIdToken({

          idToken:
            credential,

          audience:
            process.env.GOOGLE_CLIENT_ID,
        });

      const payload =
        ticket.getPayload();

      const email =
        payload.email;

      const name =
        payload.name;

      /* FIND USER */

      let user =
        await User.findOne({
          email,
        });

      /* CREATE GOOGLE USER */

      if (!user) {

        user =
          await User.create({

            name,

            email,

            password:
              "google-auth-user",

            role:
              "artisan",
          });

        /* LIVE EVENT */

        const allUsers =
          await User.find();

        if (req.io) {

          req.io.emit(
            "artisanRegistered",
            allUsers
          );
        }
      }

      /* JWT */

      const token =
        jwt.sign(

          {
            id: user._id,

            role:
              user.role,
          },

          process.env.JWT_SECRET ||
          "smartartisansecret",

          {
            expiresIn:
              "7d",
          }
        );

      /* RESPONSE */

      res.json({

        token,

        user: {

          id:
            user._id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,
        },
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Google login failed",
      });
    }
  }
);

module.exports =
  router;