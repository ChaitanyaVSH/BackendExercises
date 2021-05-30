const dotenv = require("dotenv").config();

const { Client } = require('@notionhq/client');

// Params that the client can accept
const clientParams = {
    auth: process.env.NOTION_ACCESS_TOKEN
}
// Initiate notion client
const notion = new Client(clientParams);


const listDB = async () => {
    const result = await notion.databases.list();
    console.log("DBs are: ", result);
}

listDB();
