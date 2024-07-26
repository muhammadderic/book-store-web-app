const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  try {
    // Check if all the required fields are provided
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: title, author, publishYear',
      });
    }

    // Create a new book object
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    // Use the Book model to create a new book in the database
    const book = await Book.create(newBook);

    // Send a 201 status code with a success message and the created book object
    return res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the book',
      error: error.message,
    });
  }
};

module.exports = { createBook };

const getAllBooks = async (req, res) => {
  try {
    // find all books in the database
    const books = await Book.find({});

    // Return a JSON object with the count and data of all books
    return res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the book',
      error: error.message,
    });
  }
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