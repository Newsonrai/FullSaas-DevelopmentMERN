const express = require("express"); //express require gareko
const { books } = require("./database/connection");

const app = express(); //express trigger gareko

//import gareko databaseko file
require("./database/connection");
app.use(express.json()); //yo code express lai json data bujhaunu lai hannai parxa

// Alternative Method
// const app = require('express')()

app.get("/books", async (req, res) => {
  // logic to fetch books from database
  const datas = await books.findAll(); //select * from books, always returns arrays

  res.json({
    message: "Books fetched successfully.",
    datas,
  });
});
app.post("/books", async (req, res) => {
  // console.log(req.body)
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice
  console.log("Incomming Request Body", req.body);
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.create({
    bookName, //columeName:value
    bookPrice,
    bookAuthor,
    bookGenre,
  });
  res.json({
    message: "Book added successfully.",
  });
});
app.delete("/books/:id", (req, res) => {
  res.json({
    message: "Book deleted successfully.",
  });
});
app.patch("/books/:id", (req, res) => {
  res.json({
    message: "Book updated successfully.",
  });
});

//postgres.umzlbthbzliwutpabqfc:iamnepali010@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

postgresql: app.listen(4000, function () {
  console.log("server/backend/node project has started at port 4000");
});
