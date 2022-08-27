const dotenv = require("dotenv").config();

// Importing client from the notion package.
const { Client } = require('@notionhq/client');

// Params that the client can accept
const clientParams = {
    auth: "secret_U8IjXyYyXCOv8w380X74T2Ut6WRiDU2oKayjg9oHSr3"
}

// Initiate notion client
const notion = new Client(clientParams);
console.log("Client created successfully");

module.exports = notion;
