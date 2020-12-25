const express = require("express");
const router = express.Router();

const getAbsolutePath = require('../utils/absolutePath');

router.get("/", (req, res, next) => {
  res.sendFile(getAbsolutePath("..", "views", "homePage.html"));
});

module.exports = router;
