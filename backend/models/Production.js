const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema(
  {
    artisanName: {
      type: String,
      required: true,
    },

    cluster: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    materialUsed: {
      type: String,
    },

    productionDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Production",
  productionSchema
);