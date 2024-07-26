const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "configs", ".env") });

// Create express instance
const app = express();

// Routes
app.use("/api/v1", (req, res) => {
  res.send("Hello Deric");
})

module.exports = app;