const express = require("express");

const Hats = require("./hats-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.method);
  const hats = Hats.getHats();
  res.status(200).send(`
    <h1> Hats: </h1>
  `);
});

//Exports:
module.exports = router;
