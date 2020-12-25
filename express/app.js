// third party imports
const express = require("express");

// internal imports
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoutes= require("./routes/notFound");
const homePageRoutes = require("./routes/homePage");

const app = express();

// middleware functions
app.use("/", homePageRoutes);
app.use("/admin/product",adminRoutes);
app.use("/shop/",shopRoutes);
app.use(notFoundRoutes);

// add new comment
// app.use((req, res, next) => {
//   console.log("mw 1");
//   res.send('Hello there');
//   next();
// });

// app.use((req, res, next) => {
//   console.log("mw 2");
// });

app.listen(5000);
