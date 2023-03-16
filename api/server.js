const express = require("express");
/*
    Dependencies:

    npm install express
*/
const server = express();

server.use(express.json()); //Allow the use of json request body fields
