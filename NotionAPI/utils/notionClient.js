const dotenv = require("dotenv").config();

// Importing client from the notion package.
const { Client } = require('@notionhq/client');

// Params that the client can accept
const clientParams = {
    auth: process.env.NOTION_ACCESS_TOKEN
}

// Initiate notion client
const notion = new Client(clientParams);

module.exports = notion;
