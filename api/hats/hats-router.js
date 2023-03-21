const express = require("express");

const Hats = require("./hats-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.method);
  Hats.getHats()
    .then((data) => {
      //console.log(data, "<------");
      console.log("YES");
      let successMSG = `<h1> Hats: </h1>`;

      let newData = Object.keys(data);
      console.log(newData);
      //   newData.map((element) => {
      //     console.log(element, ":SDGFDGGS");
      //   });

      res.status(200).send(`
        <h1> Hats: </h1>
        
      `);
    })
    .catch((err) => {});
});

//Exports:
module.exports = router;
