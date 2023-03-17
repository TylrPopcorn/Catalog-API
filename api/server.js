const express = require("express");
/*
    Dependencies:

    npm install express
    npm i -D nodemon
*/
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json()); //Allow the use of json request body fields

//ENDPOINTS
server.get("/", (req, res) => {
  //base endpoint
  res.send(`
        <h1> Welcome to Node! <h1>
    `);
});
//Exports
module.exports = server;
