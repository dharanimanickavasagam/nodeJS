const express = require("express");
const router = express.Router();

const getAbsolutePath = require('../utils/absolutePath');

// form bodies parsing alone is handled
// or app.use(bodyParser.urlencoded({extended :false}))
const bodyParser = require("body-parser");
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
  res.sendFile(getAbsolutePath('../', 'views', 'addProduct.html'));
});

router.post("/", (req, res, next) => {
  console.log("redirecting", req.body);
  res.redirect("/");
});

module.exports = router;
