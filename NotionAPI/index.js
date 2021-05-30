const express = require("express");
const getEvents = require("./services/getEvents");
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Application is up and running at ${PORT}`);
})




// Sample snippets
/**
 * * Listing all the databases linked to the integrations
 * const listDB = async () => {
 * const result = await notion.databases.list();
 * console.log("DBs are: ", result);
 * }
 */

// Importing getEvents from the services.
// const getEvents = require("./services/getEvents");

// (async () => {
//     const events = await getEvents();
//     console.log("Events: ", events);
// })();
