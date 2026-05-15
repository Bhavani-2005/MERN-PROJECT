const mongoose = require("mongoose");

const ecommerceSchema = new mongoose.Schema(
  {
    orderId: String,
    product: String,
    category: String,
    sales: Number,
    quantity: Number,
    profit: Number,
    customer: String,
    region: String,
    orderDate: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "EcommerceProduct",
  ecommerceSchema
);