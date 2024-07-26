const Book = require("../models/bookModel");

const createBook = async (req, res, next) => {
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
    next();
  }
};

module.exports = { createBook };

const getAllBooks = async (req, res, next) => {
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
    next();
  }
}

const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    // find a book in the database
    const book = await Book.findById(id);

    // Check if the book exists
    if (!book) {
      return res.status(404).json({
        success: false,
        message: `Book with ID ${id} was not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: "The book fetched successfully",
      data: book,
    });
  } catch (error) {
    console.log(error.message);
    next();
  }
}

const updateBook = async (req, res, next) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.status(400).json({
        success: false,
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Book with ID ${id} was not found`,
      });
    }

    return res.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    next();
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Book with ID ${id} was not found`,
      });
    }

    return res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
}