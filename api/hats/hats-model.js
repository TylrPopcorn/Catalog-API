//
//
const axios = require("axios");
let hats = {};
//------------------
//Functions:---

function getHats() {
  console.log(hats, ">---");
  axios
    .get("https://catalog.roblox.com/v1/search/items/details")
    .then((res) => {
      for (let x of res.data.data) {
        hats[x.name] = x;
      }
    })
    .catch((err) => {});
  return hats;
}

//-------------
//Exports
module.exports = {
  getHats,
};
