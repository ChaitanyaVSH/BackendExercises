// Imports
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Creating an express app
const app = express();

// Enabling CORS
app.use(cors());

// Listening for API requests
app.listen(PORT, () => {
  console.log(`App up and running on ${PORT}`);
});
