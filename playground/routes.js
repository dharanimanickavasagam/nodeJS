const fs = require("fs");
const http = require("http");

const redirectBasedonURL = (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`
   <html>
    <body>
    <form action="/message" method="POST">
        <h1>Hello</h1>
        Enter Name : <input type="text" name="message"/> <br />
        <button type="submit"> Click Me </button>
    </form>
    </body>
   </html>`);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("chunk is", chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      // blocking sync code
      // fs.writeFileSync("./readFromInputBox.txt", message);

      // async code
      fs.writeFile("./newFile.txt", message, (err) => {
        // 2 step process
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        res.writeHead(302, {
          Location: "/",
        });
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html> <body> <h1> Welcome to Node JS </h1> </body> </html>");
  return res.end();
};

module.exports.redirectBasedonURL = redirectBasedonURL;
