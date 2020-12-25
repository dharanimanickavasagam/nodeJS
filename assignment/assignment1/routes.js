const http = require("http");
const routeHandler = (req, res) => {
  const { url } = req;

  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`
      <html>
       <body>
           <h1>Hello</h1>
           <form action='/createUser' method='POST'>
             <input type="text" name='username'/>
             <button type="submit"> Create </button>
           </form>
       </body>
      </html>`);
    return res.end();
  } else if (url === "/users") {
    res.write(`
      <html>
       <body>
           <ul>
           <li> user 1 </li>
           <li> user 2 </li>
           <li> user 3 </li>
           <li> user 4 </li>
           <li> user 5 </li>
           </ul>
       </body>
      </html>`);
    return res.end();
  } else if (url === "/createUser") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }

  res.write(`
  <html>
   <body>
       <h1>
            NOT FOUND !!!
       </h1>
   </body>
  </html>`);
  return res.end();
};

exports.routeHandler = routeHandler;
