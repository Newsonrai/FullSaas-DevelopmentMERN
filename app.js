const express = require("express"); //express require gareko
const bookRoute = require("./routes/bookRoute")


const app = express(); //express trigger gareko

//import gareko databaseko file
require("./database/connection");
app.use(express.json()); //yo code express lai json data bujhaunu lai hannai parxa

// Alternative Method
// const app = require('express')()


app.use("/api",bookRoute)

postgresql: app.listen(4000, function () {
  console.log("server/backend/node project has started at port 4000");
});


