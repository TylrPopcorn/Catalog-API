const express = require("express");

const Hats = require("./hats-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Hats.getHats()
    .then((data) => {
      //console.log(data, "<------");
      let successMSG = `<h1> Hats: </h1>`;

      let newData = Object.keys(data);
      newData.map((hat) => {
        successMSG += `\n${hat}`;
      });

      res.status(200).send(successMSG);
      return;
    })
    .catch((err) => {});
});

//Exports:
module.exports = router;
