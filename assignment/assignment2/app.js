const  express = require('express');
const userRoutes = require('./routes/users');
const homePageRoutes = require('./routes/homePage');


const app = express();
app.use("/users", userRoutes);
app.use("/", homePageRoutes);

app.listen(5000);