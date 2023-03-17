console.log("node application practice");

const server = require("./api/server");
const PORT = 9000;

server.listen(PORT, () => {
  console.log(`\nServer is running on port http://localhost:${PORT}\n`);
});
