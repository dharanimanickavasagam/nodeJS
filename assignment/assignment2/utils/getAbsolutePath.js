const path = require("path");
const getAbsolutePath = (...params) => {
  return path.join(__dirname, ...params);
};

module.exports = getAbsolutePath;
