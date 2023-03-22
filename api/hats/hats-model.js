//
//
const axios = require("axios");
const hatsData = {};
//------------------
//Functions:---

async function getHats() {
  const gethats = await axios.get(
    "https://catalog.roblox.com/v1/search/items/details?Category=11&SortType=3&Limit=10"
  );

  const { data } = gethats.data;
  for (let hat of data) {
    hatsData[hat.name] = hat;
  }

  const finalData = Object.keys(hatsData);
  return finalData;
}

//This function will remove any item from the hats
function remove(name) {
  if (hatsData[name] != null) {
    delete hatsData[name];
    //NOTE: After deletitng an item, you cannot get it back.
    return true;
  } else {
    //The hat was not found in the list of data
    return {
      message: "Cannot find hat", //tell the user
    };
  }
}

//A middleware to just verify if the name is in the specified table
function verifyName(req, res, next) {
  const { name } = req.params;

  if (name.trim().length > 0) {
    next();
  } else {
    res.status(404).send({
      message: "Insert a valid hat name to search for",
    });
    return;
  }
}

//-------------
//Exports
module.exports = {
  getHats,
  remove,
  verifyName,
};
