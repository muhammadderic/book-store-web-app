const { json } = require("express");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(json());
  app.use(cors());
  app.use(morgan("dev"));
}