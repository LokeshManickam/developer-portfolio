require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://lokeshmanickam.online/"
    ]
}));
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});