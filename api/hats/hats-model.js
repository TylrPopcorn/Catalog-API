//
//
const axios = require("axios");
let hats = {};
//------------------
//Functions:---

async function getHats() {
  const hats = await axios.get(
    "https://catalog.roblox.com/v1/search/items/details"
  );

  console.log(hats.data.data);
  return "Test";
}

//-------------
//Exports
module.exports = {
  getHats,
};
