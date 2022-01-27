// Imports
const apicache = require("apicache");
const cors = require("cors");
const express = require("express");
const expressRateLimiter = require("express-rate-limit");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

// Creating an express app
const app = express();

// Enabling CORS
app.use(cors());

const rateLimiter = expressRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(rateLimiter);

// Initialize caches
let cache = apicache.middleware;
// Enable cache
app.use(cache("1 minutes"));

// Routes
app.use("/api", require("./routes"));

// Listening for API requests
app.listen(PORT, () => {
  console.log(`App up and running on ${PORT}`);
});
