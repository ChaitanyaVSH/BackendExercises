// Importing notion client from the utils.
const notion = require("../utils/notionClient");

// Querying the database "React Events"
module.exports =  async function getEvents() {

    const database_id =  process.env.NOTION_DATABASE_ID;

    const payload = {
        path: `databases/2aae1128-68f4-4cfe-8837-168ad437499b/query`,
        method: "POST"
    }

    // const { results } = await notion.databases.query({database_id: database_id});
    const { results } = await notion.request(payload);

    return results;
};
