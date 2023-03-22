//-----------HATS------------\\
//
const express = require("express");
//vars:
const Hats = require("./hats-model");

//MIDDLEWARE:
const { verifyName } = Hats;
//----
const router = express.Router();

//
//
//---------ENDPOINTS-----------:

//This endPoint will get all of the hats and show them to the user:
router.get("/", (req, res) => {
  //The main endpoint
  Hats.getHats() //invoke the function,
    //SUCCESSFULLY retrieved all hats
    .then((data) => {
      let successMSG = `<h1> Hats: </h1>`; //Used to show the user the data
      data.map((hat) => {
        successMSG += `\n${hat}`; //ADD each hat name to the list.
      });

      res.status(200).send(successMSG); //return the data.
      return;
    })
    //FAILED to get hats:
    .catch((err) => {
      console.log("Internal error - ", err.message);
      res.status(500).json({
        message: "Error retrieving hats",
      });
    });
});

//This endPoint will delete a hat by the name of the item
router.delete("/:name", verifyName, (req, res) => {
  const { name } = req.params; //name of hat

  const HatRemoved = Hats.remove(name); //Attempt to delete hat
  if (HatRemoved == true) {
    //SUCCESS
    console.log(`SUCCESS - Successfully delete hat: '${name}'`);
    res.status(200).send({
      message: "Deletion - SUCCESS",
    });
  } else {
    console.log(`FAILED - ${HatRemoved.message}: '${name}'`); //output message to the developer
    res.status(400).send({
      message: "Deletion - FAILED",
    });
  }
});

//Exports:
module.exports = router;
