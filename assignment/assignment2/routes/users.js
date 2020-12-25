const express = require("express");
const router = express.Router();

const getAbsolutePath = require("../utils/getAbsolutePath");

router.get("/", (req, res, next) => {
  res.sendFile(getAbsolutePath('..', 'views', 'users.html'));
});

module.exports = router;
