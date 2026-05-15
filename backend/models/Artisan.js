const mongoose = require("mongoose");

const artisanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    cluster: {
      type: String,
      required: true,
    },

    craftType: {
      type: String,
      enum: [
        "Handloom",
        "Sericulture",
        "Handicraft",
      ],
      required: true,
    },

    phone: {
      type: String,
    },

    village: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Artisan",
  artisanSchema
);