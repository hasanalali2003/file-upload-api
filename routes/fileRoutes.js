const express = require("express");
const upload = require("../middlewares/multerConfig");
const fileController = require("../controllers/fileController");

const router = express.Router();

//routes
router.post("/upload", upload.array("files", 10), fileController.uploadFile); //upload file or files with max count 10
router.delete("/delete/:filename", fileController.deleteFile); //delete file
router.get("/view", fileController.viewFiles); //view all the files

module.exports = router;
