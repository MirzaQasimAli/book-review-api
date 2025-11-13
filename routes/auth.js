const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const books = require('../booksdb');
const { users, isValidUser, authenticateUser } = require('../users');

const JWT_SECRET = 'very_secret_key_change_me';

// Task 6: Register New user
router.post('/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  }

  if (isValidUser(username)) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  users.push({ username, password });
  return res.status(201).json({ message: 'User registered successfully.' });
});

// Task 7: Login as a Registered user
router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  }

  const user = authenticateUser(username, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  return res.json({ message: 'Login successful.', token });
});

// Authentication middleware for registered-user routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token missing. Please login first.' });
  }

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.user = payload;
    next();
  });
}

// Task 8: Add/Modify a book review.
// A registered user can add or update their own review for a book.
router.put('/auth/review/:isbn', authenticateToken, (req, res) => {
  const isbn = req.params.isbn;
  const { review } = req.body || {};
  const username = req.user.username;

  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: 'Book not found.' });
  }
  if (!review) {
    return res.status(400).json({ message: 'Review text is required.' });
  }

  if (!book.reviews) {
    book.reviews = {};
  }
  book.reviews[username] = review;
  return res.json({
    message: 'Review added/updated successfully.',
    reviews: book.reviews,
  });
});

// Task 9: Delete book review added by that particular user.
router.delete('/auth/review/:isbn', authenticateToken, (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.username;

  const book = books[isbn];
  if (!book || !book.reviews || !book.reviews[username]) {
    return res.status(404).json({ message: 'Review not found for this user.' });
  }

  delete book.reviews[username];

  return res.json({
    message: 'Review deleted successfully.',
    reviews: book.reviews,
  });
});

module.exports = router;
