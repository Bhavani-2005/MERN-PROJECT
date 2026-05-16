const path = require("path");

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const http = require("http");

const { Server } =
  require("socket.io");

require("dotenv").config();

/* ROUTES */

const authRoutes =
  require("./routes/authRoutes");

const productRoutes =
  require("./routes/productRoutes");

const ecommerceRoutes =
  require("./routes/ecommerceRoutes");

const paymentRoutes =
  require("./routes/paymentRoutes");

const documentRoutes =
  require("./routes/documentRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

/* APP */

const app = express();
const server =
  http.createServer(app);

const io =
  new Server(server, {

    cors: {
      origin:
        "http://localhost:5173",

      methods: [
        "GET",
        "POST",
      ],
    },
  });

  app.use((req, res, next) => {

  req.io = io;

  next();
});

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* API ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/ecommerce",
  ecommerceRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

app.use(
  "/api/documents",
  documentRoutes
);

/* ADMIN ROUTES */

app.use(
  "/api/admin",
  adminRoutes
);

/* STATIC UPLOADS */

app.use(
  "/uploads",
  express.static("uploads")
);

/* FRONTEND BUILD */

app.use(
  express.static(
    path.join(
      __dirname,
      "../frontend/dist"
    )
  )
);

/* REACT ROUTES */

app.get(
  /^(?!\/api).*/,
  (req, res) => {

    res.sendFile(
      path.join(
        __dirname,
        "../frontend/dist/index.html"
      )
    );
  }
);


io.on(
  "connection",

  (socket) => {

    console.log(
      "User Connected:",
      socket.id
    );

    socket.on(
      "disconnect",

      () => {

        console.log(
          "User Disconnected"
        );
      }
    );
  }
);
/* DATABASE */

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {

    console.log(
      "MongoDB Connected"
    );

  server.listen(
  process.env.PORT || 5000,

  () => {

    console.log(
      `Server running on port ${
        process.env.PORT || 5000
      }`
    );
  }
);

  })
  .catch((err) => {

    console.log(
      "MongoDB Error:",
      err
    );
  });