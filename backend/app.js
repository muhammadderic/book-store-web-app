const express = require("express");

// Create express instance
const app = express();

// Routes
app.use("/api/v1", (req, res) => {
  res.send("Hello Deric");
})

module.exports = app;