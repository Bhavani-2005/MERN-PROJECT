const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
  name: String,

  category: String,

  price: Number,

  quantity: Number,

  description: String,

  image: String,
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Product", productSchema);