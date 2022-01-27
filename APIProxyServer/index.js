// Imports
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// Creating an express app
const app = express();

// Enabling CORS
app.use(cors());

// Routes
app.use("/api", require("./routes"));

// Listening for API requests
app.listen(PORT, () => {
  console.log(`App up and running on ${PORT}`);
});
