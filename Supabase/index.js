const dotenv = require("dotenv").config();
const fetchOpinions = require("./services/api/fetchOpinions");

const express = require("express");
const PORT = process.env.PORT || 4578;

const app = express();

console.log(
  fetchOpinions().then((response) => console.log("response", response))
);

app.listen(PORT, () => {
  console.log("App is up and running..." + PORT);
});
