console.log("node application practice");

const server = require("./api/serve");

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
