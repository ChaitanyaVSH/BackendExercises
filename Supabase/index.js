const dotenv = require("dotenv").config();
const fetchOpinions = require("./services/api/fetchOpinions");

const express = require("express");
const PORT = process.env.PORT || 4578;

const app = express();

/**
 * Handler for /opinions
 */
app.get("/opinions", async (request, response) => {
  const opinions = await fetchOpinions().then((response) => response);

  response.json(opinions);
});

/**
 * Handler for Base directory
 */
app.get("/", async (request, response) => {
  response.send("Hello");
});

app.listen(PORT, () => {
  console.log("App is up and running..." + PORT);
});
