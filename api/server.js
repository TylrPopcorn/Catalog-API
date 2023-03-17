const express = require("express");
/*
    Dependencies:

    npm install express
    npm i -D nodemon
*/
const server = express();

server.use(express.json()); //Allow the use of json request body fields

server.get("/", (req, res) => {
  res.send(`
        <h1> Welcome to Node! <h1>
    `);
});
//Exports
module.exports = server;
