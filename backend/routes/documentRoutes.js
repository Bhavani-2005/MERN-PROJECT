const express =
  require("express");

const multer =
  require("multer");

const path =
  require("path");

const router =
  express.Router();

const {
  uploadDocument,
  getDocuments,
} = require(
  "../controllers/documentController"
);

/* STORAGE */

const storage =
  multer.diskStorage({

    destination:
      "./uploads",

    filename:
      (req, file, cb) => {

        cb(
          null,

          Date.now() +
            path.extname(
              file.originalname
            )
        );
      },
  });

const upload =
  multer({
    storage,
  });

router.post(
  "/",

  upload.single("file"),

  uploadDocument
);

router.get(
  "/",

  getDocuments
);

module.exports =
  router;