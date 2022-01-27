/**
 * We can use Router to abstract the data providers to the controllers.
 */

// Imports
const express = require("express");
const url = require("url");

// Inbuilt routing support from express
const router = express.Router();

// Client to make requests to server
const needle = require("needle");

// ENV Variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get("/", async (request, response) => {
  try {
    //   Create params
    const params = new URLSearchParams({
      [API_KEY_NAME]: [API_KEY_VALUE],
      ...url.parse(request.url, true).query,
    });

    // Make a request to server using needle
    const apiRes = await needle("get", `${API_BASE_URL}?${params}`);
    const data = apiRes.body;

    if (process.env.NOE_ENV !== "production") {
      console.log(`REQUEST ${API_BASE_URL}?${params}`);
    }

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json(error);
  }
});

/**
 * Route for /user end-point
 */
router.get("/user", (request, response) => {
  response.status(200).json({
    user: "Chaitanya",
  });
});

/**
 * Route for /posts end-point
 */
router.get("/posts", (request, response) => {
  response.status(200).json({
    post1: {
      title: "post1",
    },
    post2: {
      title: "post2",
    },
    post3: {
      title: "post3",
    },
    post4: {
      title: "post4",
    },
  });
});

module.exports = router;
