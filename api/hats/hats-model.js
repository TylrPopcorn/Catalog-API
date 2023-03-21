//
//
const axios = require("axios");
const hats = [];
//------------------
//Functions:---

async function getHats() {
  const gethats = await axios.get(
    "https://catalog.roblox.com/v1/search/items/details"
  );

  for (let x of gethats.data.data) {
    hats[x.name] = x.name;
  }

  return hats;
}

//-------------
//Exports
module.exports = {
  getHats,
};
