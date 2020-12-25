const fs = require("fs");

fs.writeFileSync("./new.txt", "hello there, I am the new content - Writing to File");
console.log(fs.readFileSync("new.txt", { encoding: "utf8" }));
