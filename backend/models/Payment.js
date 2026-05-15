const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    artisanName: {
      type: String,
      required: true,
    },

    cluster: {
      type: String,
      required: true,
    },

    unitsProduced: {
      type: Number,
      required: true,
    },

    wagePerUnit: {
      type: Number,
      required: true,
    },

    totalPayment: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: "Bank Transfer",
    },

    status: {
      type: String,
      default: "Paid",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Payment",
  paymentSchema
);