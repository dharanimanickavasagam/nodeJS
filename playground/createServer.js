const http = require("http");
const fs = require("fs");

const { redirectBasedonURL } = require("./routes");

const server = http.createServer((req, res) => {
  redirectBasedonURL(req, res);
});

console.log('server is', server);
server.listen(8000);

// setTimeout(() => {
//   console.log("unregister");
//   server.close();
//   process.exit();
// }, 5000);
