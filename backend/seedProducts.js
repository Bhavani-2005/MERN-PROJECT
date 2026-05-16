const mongoose = require("mongoose");
const csv = require("csvtojson");

require("dotenv").config();

const Product =
  require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)

  .then(async () => {

    console.log(
      "MongoDB Connected"
    );

    // READ CSV
    const products =
      await csv().fromFile(
        "./artisan_dataset.csv"
      );

    console.log(
      products.length
    );

    // DELETE OLD DATA
    await Product.deleteMany();

    console.log(
      "Old products deleted"
    );

    // INSERT NEW DATA
    await Product.insertMany(
      products
    );

    console.log(
      "Artisan dataset inserted successfully"
    );

    process.exit();

  })

  .catch((err) => {

    console.log(err);

    process.exit(1);
  });