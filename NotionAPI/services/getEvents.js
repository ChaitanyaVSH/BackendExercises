// Importing notion client from the utils.
const notion = require("../utils/notionClient");

// Querying the database "React Events"
module.exports =  async function getEvents() {

    const database_id =  process.env.NOTION_DATABASE_ID;

    const payload = {
        path: `databases/${database_id}/query`,
        method: "POST"
    }

    // const { results } = await notion.databases.query({database_id: database_id});
    const { results } = await notion.request(payload);

    const events = results.map((page) => {
        return {
            id: page.id,
            name: page.properties.Name.title[0].plain_text,
            tags: [...page.properties.Tags.multi_select]
        }
    })

    return events;
};
