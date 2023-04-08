console.log("node application practice");

require("dotenv").config();
const server = require("./server");
const PORT = process.env.PORT || 9000;

/*
    Dependencies:

    npm install express
    npm i -D nodemon
    npm i dotenv
    npm i axios
*/

server.listen(PORT, () => {
  console.log(`\nServer is running on port http://localhost:${PORT}\n`);
});
