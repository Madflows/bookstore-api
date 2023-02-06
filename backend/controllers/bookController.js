const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");
// @desc    Get Books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

// @desc    Add a books
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  if (!title) {
    res.status(400);
    throw new Error("Please add a title");
  } else if (!author) {
    res.status(400);
    throw new Error("Please add an author");
  }
  const book = await Book.create({
    title: title,
    author: author,
  });
  res.status(200).json(book);
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const editBook = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let author = req.body.author;
  const book = await Book.findById(id);
  if (!title) {
    res.status(400);
    throw new Error("Please add a title");
  } else if (!author) {
    res.status(400);
    throw new Error("Please add an author");
  }
  if (!book) {
    res.status(500);
    throw new Error(`Book with ID ${id} not found`);
  }

  const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBook);
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  let id = req.params.id;
  const book = await Book.findById(id);
  if (!book) {
    res.status(500);
    throw new Error(`Book with ID ${id} not found`);
  }

  await Book.findByIdAndDelete(id)

  res.json({
    id: id,
  });
});

module.exports = {
  getBooks,
  addBook,
  editBook,
  deleteBook,
};
