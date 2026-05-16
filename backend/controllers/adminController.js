import User from "../models/User.js";
import Production from "../models/Production.js";

export const getDashboardStats =
  async (req, res) => {

    try {

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

      res.status(500).json({
        message:
          error.message,
      });
    }
  };