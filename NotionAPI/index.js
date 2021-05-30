
// Sample snippets
/**
 * * Listing all the databases linked to the integrations
 * const listDB = async () => {
 * const result = await notion.databases.list();
 * console.log("DBs are: ", result);
 * }
 */

// Importing getEvents from the services.
const getEvents = require("./services/getEvents");

(async () => {
    const events = await getEvents();
    console.log("Events: ", events);
})();