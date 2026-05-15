const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const ecommerceRoutes = require("./routes/ecommerceRoutes");
const app = express();

app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ecommerce", ecommerceRoutes);

app.use(
  express.static(
    path.join(__dirname, "../frontend/dist")
  )
);

app.get("/{*any}", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../frontend/dist/index.html"
    )
  );
});

/* DATABASE */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});