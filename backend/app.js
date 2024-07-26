const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const bookRouter = require("./routes/bookRoutes");
const middleware = require("./middlewares");

dotenv.config({ path: path.join(__dirname, "configs", ".env") });

// Create express instance
const app = express();

// Middleware
middleware(app);

// Routes
app.use("/api/v1", bookRouter)

module.exports = app;