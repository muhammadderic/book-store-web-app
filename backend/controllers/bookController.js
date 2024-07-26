const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  res.send("Create a book");
}

const getAllBooks = async (req, res) => {
  res.send("Get all books");
}

const getBook = async (req, res) => {
  res.send("Get one book by ID");
}

const updateBook = async (req, res) => {
  res.send("Update a book");
}

const deleteBook = async (req, res) => {
  res.send("Delete a book");
}

module.exports = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
}