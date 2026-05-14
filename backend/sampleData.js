const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

const sampleProducts = [
  {
    name: "Handmade Bag",
    category: "Bags",
    price: 1500,
    quantity: 10,
    description: "Premium artisan bag",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  {
    name: "Clay Pot",
    category: "Pottery",
    price: 800,
    quantity: 15,
    description: "Traditional clay pot",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },

  {
    name: "Wooden Lamp",
    category: "Decor",
    price: 2200,
    quantity: 5,
    description: "Hand carved wooden lamp",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    name: "Silk Saree",
    category: "Fashion",
    price: 4500,
    quantity: 7,
    description: "Traditional silk saree",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },

  {
    name: "Bamboo Basket",
    category: "Crafts",
    price: 600,
    quantity: 20,
    description: "Eco-friendly basket",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  },

  {
    name: "Handmade Necklace",
    category: "Jewelry",
    price: 1200,
    quantity: 12,
    description: "Beautiful handmade jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
  },

  {
    name: "Leather Wallet",
    category: "Accessories",
    price: 999,
    quantity: 18,
    description: "Premium leather wallet",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
  },

  {
    name: "Wool Carpet",
    category: "Home Decor",
    price: 3200,
    quantity: 6,
    description: "Soft wool handmade carpet",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

const insertData = async () => {

  try {

    await Product.deleteMany();

    await Product.insertMany(sampleProducts);

    console.log("Sample Data Inserted");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

insertData();