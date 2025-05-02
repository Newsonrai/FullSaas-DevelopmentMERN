const { addBooks, fetchBooks, deleteBooks, editBooks, singleFetchBook } = require("../controllers/bookController")

const router = require("express").Router()


router.route("/").get(fetchBooks).post(addBooks)
router.route("/:id").delete(deleteBooks).patch(editBooks).get(singleFetchBook)

// router.route("/books",addBooks)
// router.route("/books",deleteBooks)
// router.route("/books",editBooks)


module.exports = router