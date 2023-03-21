const express = require("express");

const Hats = require("./hats-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.method);
  res.send(200);
});

//Exports:
module.exports = router;
