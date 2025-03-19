const express = require("express");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/files", fileRoutes); //Routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
