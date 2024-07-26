const router = require("express").Router();

const {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

/**
 * @route     POST /books
 * @desc      Save a new book
 * @access    Public
 * @body      { title, author, publishYear, }
 * @response  201 Created - Book saved successfully
 */
router.post('/books', createBook);

/**
 * @route     GET /books
 * @desc      Get all books
 * @access    Public
 * @response  200 OK - Returns an array of all books
 */
router.get('/books', getAllBooks);

/**
 * @route     GET /books/:id
 * @desc      Get one book by id
 * @access    Public
 * @response  200 OK - Returns the book with the specified ID
 */
router.get('/books/:id', getBook);

/**
 * @route     PUT /books/:id
 * @desc      Update a book by id
 * @access    Public
 * @body      { title, author, publishedYear }
 * @response  200 OK - Book updated successfully
 */
router.put('/books/:id', updateBook);

/**
 * @route     DELETE /books/:id
 * @desc      Delete a book by id
 * @access    Public
 * @response  200 OK - Book deleted successfully
 */
router.delete('/books/:id', deleteBook);

module.exports = router;