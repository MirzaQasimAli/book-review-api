// Simple in-memory book database
// Keyed by ISBN for quick lookup
const books = {
  "9780007117116": {
    isbn: "9780007117116",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    reviews: {
      // username: review string
    },
  },
  "9780439136365": {
    isbn: "9780439136365",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    reviews: {},
  },
  "9780553386790": {
    isbn: "9780553386790",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    reviews: {},
  },
  "9780141441146": {
    isbn: "9780141441146",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    reviews: {},
  },
  "9780061120084": {
    isbn: "9780061120084",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    reviews: {},
  },
  "9780307474278": {
    isbn: "9780307474278",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    reviews: {},
  },
};

module.exports = books;
