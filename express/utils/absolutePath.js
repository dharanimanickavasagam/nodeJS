const path = require("path");

function getAbsolutePath(...params) {
  return path.join(__dirname, ...params);
}

module.exports = getAbsolutePath;

// gets the currentActive rootDirectory
// module.exports = path.dirname(process.mainModule.filename);
// usage
// const rootDir = require('aboveImport');
// res.sendFile(rootDir, 'views', 'addProduct.html');