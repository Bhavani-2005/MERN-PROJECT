import { GoogleLogin } from "@react-oauth/google";

import axios from "axios";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  loginUser,
} from "../api/authApi";

export default function Login() {

  const navigate =
    useNavigate();

  const [loading,
    setLoading] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      email: "",
      password: "",
    });

  /* HANDLE INPUT */

  const handleChange =
    (e) => {

      setFormData({
        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  /* ROLE BASED REDIRECT */

  const redirectUser =
    (user) => {

      if (
        user?.role ===
        "admin"
      ) {

        navigate("/admin");

      } else if (
        user?.role ===
        "cluster-head"
      ) {

        navigate("/cluster");

      } else {

        navigate("/artisan");
      }
    };

  /* NORMAL LOGIN */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const res =
          await loginUser(
            formData
          );

        /* SAVE TOKEN */

        localStorage.setItem(
          "token",
          res.data.token
        );

        /* SAVE USER */

        localStorage.setItem(
          "user",

          JSON.stringify(
            res.data.user
          )
        );

        alert(
          "Login Successful"
        );

        /* REDIRECT */

        redirectUser(
          res.data.user
        );

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data
            ?.message ||
          "Login Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        background: `
          radial-gradient(circle at top right, rgba(76,0,255,0.25), transparent 20%),
          radial-gradient(circle at bottom left, rgba(0,119,255,0.18), transparent 25%),
          linear-gradient(135deg, #020617 0%, #020b2d 45%, #071133 100%)
        `,

        fontFamily:
          "Poppins, sans-serif",

        padding: "20px",
      }}
    >

      <form
        onSubmit={
          handleSubmit
        }

        style={{
          width: "400px",

          padding: "45px",

          borderRadius:
            "28px",

          background:
            "rgba(15, 23, 42, 0.75)",

          border:
            "1px solid rgba(56,189,248,0.18)",

          backdropFilter:
            "blur(18px)",

          display: "flex",

          flexDirection:
            "column",

          gap: "22px",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            textAlign:
              "center",
          }}
        >

          <h1
            style={{
              color:
                "white",

              marginBottom:
                "10px",

              fontSize:
                "34px",
            }}
          >
            Smart Artisan
          </h1>

          <p
            style={{
              color:
                "#cbd5e1",

              fontSize:
                "15px",

              margin: 0,
            }}
          >
            Login to continue
          </p>

        </div>

        {/* EMAIL */}

        <input
          type="email"

          name="email"

          placeholder="Enter your email"

          value={
            formData.email
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        />

        {/* PASSWORD */}

        <input
          type="password"

          name="password"

          placeholder="Enter your password"

          value={
            formData.password
          }

          onChange={
            handleChange
          }

          required

          style={
            inputStyle
          }
        />

        {/* LOGIN BUTTON */}

        <button
          type="submit"

          disabled={loading}

          style={{
            ...buttonStyle,

            opacity:
              loading
                ? 0.7
                : 1,
          }}
        >

          {loading
            ? "Logging in..."
            : "Login"}

        </button>

        {/* DIVIDER */}

        <div
          style={{
            display: "flex",

            alignItems:
              "center",

            gap: "10px",
          }}
        >

          <div
            style={{
              flex: 1,

              height: "1px",

              background:
                "rgba(255,255,255,0.1)",
            }}
          />

          <span
            style={{
              color:
                "#94a3b8",

              fontSize:
                "13px",
            }}
          >
            OR
          </span>

          <div
            style={{
              flex: 1,

              height: "1px",

              background:
                "rgba(255,255,255,0.1)",
            }}
          />

        </div>

        {/* GOOGLE LOGIN */}

        <div
          style={{
            display: "flex",

            justifyContent:
              "center",
          }}
        >

          <GoogleLogin

            onSuccess={
              async (
                credentialResponse
              ) => {

                try {

                  const res =
                    await axios.post(
                      "https://smart-artisan-assistant.onrender.com/api/auth/google",
                      {
                        credential:
                          credentialResponse.credential,
                      }
                    );

                  /* SAVE TOKEN */

                  localStorage.setItem(
                    "token",
                    res.data.token
                  );

                  /* SAVE USER */

                  localStorage.setItem(
                    "user",

                    JSON.stringify(
                      res.data.user
                    )
                  );

                  alert(
                    "Google Login Successful"
                  );

                  /* REDIRECT */

                  redirectUser(
                    res.data.user
                  );

                } catch (error) {

                  console.log(
                    error
                  );

                  alert(
                    "Google Login Failed"
                  );
                }
              }
            }

            onError={() => {

              console.log(
                "Google Login Failed"
              );

              alert(
                "Google Login Failed"
              );
            }}
          />

        </div>

        {/* REGISTER */}

        <p
          style={{
            color:
              "#cbd5e1",

            textAlign:
              "center",

            margin: 0,
          }}
        >

          Don't have an account?{" "}

          <Link
            to="/register"

            style={{
              color:
                "#38bdf8",

              textDecoration:
                "none",

              fontWeight:
                "600",
            }}
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

/* INPUT STYLE */

const inputStyle = {

  padding: "15px",

  borderRadius: "14px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  background:
    "rgba(255,255,255,0.06)",

  color: "white",

  fontSize: "15px",

  outline: "none",
};

/* BUTTON STYLE */

const buttonStyle = {

  padding: "15px",

  borderRadius: "14px",

  border: "none",

  background:
    "linear-gradient(135deg,#38bdf8,#0ea5e9)",

  color: "#020617",

  fontWeight:
    "700",

  fontSize: "17px",

  cursor: "pointer",

  boxShadow:
    "0 10px 30px rgba(56,189,248,0.35)",
};