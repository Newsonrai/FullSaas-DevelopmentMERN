const { books } = require("../database/connection");

exports.fetchBooks = async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "books fetched successfully", 
        datas
    })
}

exports.addBooks = async (req, res) => {
  // console.log(req.body)
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  // check if all data aako xa vane only proceed , else not proceed throw error in response
  await books.create({
    bookName, //columeName:value
    bookPrice,
    bookAuthor,
    bookGenre,
  });
  res.json({
    message: "Book added successfully.",
  });
};
exports.deleteBooks = (req, res) => {
  res.json({
    message: "Book deleted successfully.",
  });
};
exports.editBooks = (req, res) => {
  res.json({
    message: "Book updated successfully.",
  });
};

// exports.singleFetchBook = async function(req, res) {
//   const id = req.params.id;
//   const datas = await books.findByPk(id);
//   res.json({
//     message: "Single Book Fetched Successfully.",
//     datas,
//   });
// };

exports.singleFetchBook = async function(req,res){
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
        // datass
    })

}
// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai
