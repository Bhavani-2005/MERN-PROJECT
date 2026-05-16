const Payment =
  require("../models/Payment");

exports.createPayment =
  async (req, res) => {

    try {

      const payment =
        await Payment.create(
          req.body
        );

      res.status(201).json(
        payment
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

exports.getPayments =
  async (req, res) => {

    try {

      const payments =
        await Payment.find().sort({
          createdAt: -1,
        });

      res.json(payments);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };