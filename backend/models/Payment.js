const mongoose =
  require("mongoose");

const paymentSchema =
  new mongoose.Schema(
    {
      artisanName: String,

      cluster: String,

      craftType: String,

      unitsProduced: Number,

      wagePerUnit: Number,

      totalWage: Number,

      paymentStatus: String,
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Payment",
    paymentSchema
  );