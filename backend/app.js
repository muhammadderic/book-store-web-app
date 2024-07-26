const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const bookRouters = require("./routes/bookRoutes");

dotenv.config({ path: path.join(__dirname, "configs", ".env") });

// Create express instance
const app = express();

// Routes
app.use("/api/v1", bookRouters)

module.exports = app;