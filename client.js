// Node.js client using Axios to call the Book Review API.
// Demonstrates different asynchronous styles for the lab tasks.
const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Task 10: Get all books – Using async callback function
function getAllBooksCallback(callback) {
  axios
    .get(`${BASE_URL}/books`)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error);
    });
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/books/isbn/${isbn}`);
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  const response = await axios.get(
    `${BASE_URL}/books/author/${encodeURIComponent(author)}`
  );
  return response.data;
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitle(title) {
  const response = await axios.get(
    `${BASE_URL}/books/title/${encodeURIComponent(title)}`
  );
  return response.data;
}

// Simple demo that invokes all four methods.
// Run with: npm run client
async function runDemo() {
  console.log('--- Task 10: Get all books (callback) ---');
  getAllBooksCallback((err, data) => {
    if (err) {
      console.error('Error fetching all books:', err.message);
    } else {
      console.log('All books:', data);
    }
  });

  console.log('\n--- Task 11: Get book by ISBN (Promise) ---');
  getBookByISBN('9780007117116')
    .then((res) => {
      console.log('Book with ISBN 9780007117116:', res.data);
    })
    .catch((err) => {
      console.error('Error fetching by ISBN:', err.message);
    });

  console.log('\n--- Task 12: Get books by author (async/await) ---');
  try {
    const byAuthor = await getBooksByAuthor('J.R.R. Tolkien');
    console.log('Books by J.R.R. Tolkien:', byAuthor);
  } catch (err) {
    console.error('Error fetching by author:', err.message);
  }

  console.log('\n--- Task 13: Get books by title (async/await) ---');
  try {
    const byTitle = await getBooksByTitle('The Hobbit');
    console.log('Books with title "The Hobbit":', byTitle);
  } catch (err) {
    console.error('Error fetching by title:', err.message);
  }
}

if (require.main === module) {
  runDemo();
}

module.exports = {
  getAllBooksCallback,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};
