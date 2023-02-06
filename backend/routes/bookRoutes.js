const express = require('express');
const { getBooks, addBook, editBook, deleteBook } = require('../controllers/bookController');

const router = express.Router()

router.route("/").get(getBooks).post(addBook)
router.route("/:id").put(editBook).delete(deleteBook)

module.exports = router
