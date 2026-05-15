const express = require("express");

const router = express.Router();

const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET PRODUCTS
router.get("/", getProducts);

// ADD PRODUCT
router.post("/", addProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;