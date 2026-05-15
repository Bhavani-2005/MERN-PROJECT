const mongoose = require("mongoose");
const XLSX = require("xlsx");
require("dotenv").config();

const Product = require("./models/Product");

// OFFICE PRODUCT IMAGES
const officeImages = [
  "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  "https://images.unsplash.com/photo-1517842645767-c639042777db",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
];

// FURNITURE IMAGES
const furnitureImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
];

// TECHNOLOGY IMAGES
const techImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
];

// RANDOM IMAGE FUNCTION
function getRandomImage(category) {

  let images = [];

  if (category === "Office Supplies") {

    images = officeImages;

  } else if (category === "Furniture") {

    images = furnitureImages;

  } else if (category === "Technology") {

    images = techImages;

  } else {

    return "https://placehold.co/300x200";
  }

  return images[
    Math.floor(Math.random() * images.length)
  ];
}

const importData = async () => {

  try {

    // CONNECT MONGODB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // READ EXCEL FILE
    const workbook = XLSX.readFile(
      "./data/E-commerce.xlsx"
    );

    const sheetName = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet);

    console.log(data[0]);

    // DELETE OLD PRODUCTS
    await Product.deleteMany();

    // FORMAT DATA
    const formattedData = data.map((item) => ({

      name: item["Product Name"],

      category: item["Category"],

      price: Number(item["Sales"]),

      quantity: Number(item["Quantity"]),

      image: getRandomImage(
        item["Category"]
      ),
    }));

    // INSERT INTO DATABASE
    await Product.insertMany(formattedData);

    console.log(
      "Excel Dataset Imported Successfully"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

importData();