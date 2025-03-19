const path = require("path");
const fs = require("fs");

exports.uploadFile = (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send("No files uploaded.");
        }
        res.redirect("/api/files/view");
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).send("Error uploading file.");
    }
};

exports.viewFiles = async (req, res) => {
    const uploadDirectory = path.join(__dirname, "../uploads");

    await fs.readdir(uploadDirectory, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error reading the upload directory.");
        }
        return res.json({ files });
    });
};

exports.deleteFile = async (req, res) => {
    const filePath = path.join(__dirname, "../uploads", req.params.filename);
    if (!(await fs.existsSync(filePath))) {
        return res.status(404).json({ message: "File not found" });
    }
    await fs.unlinkSync(filePath);
    res.status(200).json({ message: "File deleted successfully" });
};
