// Imports
/**
 * We can use Router to abstract the data providers to the controllers.
 */
const express = require("express");
const router = express.Router();

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
