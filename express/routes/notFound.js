const express = require("express");
const router = express.Router();

const getAbsolutePath = require('../utils/absolutePath');

// for any type of requests to non extsitent page, prefer use()
router.use((req, res, next) => {
  // manually set the statusCode
  res.status(404);
  res.sendFile(getAbsolutePath('../', 'views', 'notFound.html'));
});

module.exports = router;
