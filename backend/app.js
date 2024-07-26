const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const bookRouter = require("./routes/bookRoutes");

dotenv.config({ path: path.join(__dirname, "configs", ".env") });

// Create express instance
const app = express();

app.use(express.json());

// Routes
app.use("/api/v1", bookRouter)

module.exports = app;