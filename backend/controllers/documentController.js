const Document =
  require("../models/Document");

const uploadDocument =
  async (req, res) => {

    try {

      const newDocument =
        await Document.create({

          name:
            req.body.name,

          artisan:
            req.body.artisan,

          type:
            req.body.type,

          status:
            "Verified",

          file:
            req.file.filename,
        });

      res
        .status(201)
        .json(newDocument);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const getDocuments =
  async (req, res) => {

    try {

      const documents =
        await Document.find();

      res.json(documents);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  uploadDocument,
  getDocuments,
};