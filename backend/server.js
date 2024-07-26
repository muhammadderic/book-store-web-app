const mongoose = require("mongoose");

const app = require("./app");

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
    // Start server
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((error) => {
    if (error.name === "MongoParseError" && error.code === 7) {
      console.log("MongoDB connection string is not valid");
    } else {
      console.log(error);
    }
  });

