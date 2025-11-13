const express = require('express');
const router = express.Router();
const books = require('../booksdb');

// Task 1: Get the book list available in the shop.
router.get('/books', (req, res) => {
  return res.json(Object.values(books));
});

// Task 2: Get the books based on ISBN.
router.get('/books/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.json(book);
});

// Task 3: Get all books by Author.
router.get('/books/author/:author', (req, res) => {
  const author = req.params.author.toLowerCase();
  const filtered = Object.values(books).filter(
    (b) => b.author.toLowerCase() === author
  );
  return res.json(filtered);
});

// Task 4: Get all books based on Title.
router.get('/books/title/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const filtered = Object.values(books).filter(
    (b) => b.title.toLowerCase() === title
  );
  return res.json(filtered);
});

// Task 5: Get book Review.
router.get('/books/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.json(book.reviews || {});
});

module.exports = router;
