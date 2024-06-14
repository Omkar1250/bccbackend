const express = require("express");
const app = express();

const contactUsRoutes = require("./routes/Contact");
const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// Connect to the database
database.connect();

app.use(express.json());
app.use(
    cors({
        origin: ["https://bombaycodingcompany.netlify.app", "http://localhost:3000"],
        credentials: true,
    })
);

// Routes
app.use("/api/v1/reach", contactUsRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running...',
    });
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
