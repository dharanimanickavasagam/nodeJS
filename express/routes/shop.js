const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Dharu's Express Shop")
});

module.exports = router;