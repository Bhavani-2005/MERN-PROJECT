const express =
  require("express");

const router =
  express.Router();

router.get(
  "/dashboard",
  async (req, res) => {

    try {

      const User =
        require("../models/User");

      const Production =
        require("../models/Production");

      /* TOTAL ARTISANS */

      const artisans =
        await User.countDocuments({
          role: "artisan",
        });

      /* TOTAL CLUSTERS */

      const clusters =
        await User.distinct(
          "cluster"
        );

      /* TOTAL PRODUCTION */

      const production =
        await Production.countDocuments();

      res.json({
        artisans,
        clusters:
          clusters.length,
        production,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);

module.exports = router;