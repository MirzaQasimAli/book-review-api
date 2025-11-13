# Book Review API Project

This project implements a simple Express-based book shop / review API and a Node.js client that uses Axios with callbacks, Promises and async/await to perform different queries.

It is structured to match the lab tasks:

## API Tasks

1. **Get the book list available in the shop** – `GET /books`
2. **Get the books based on ISBN** – `GET /books/isbn/:isbn`
3. **Get all books by Author** – `GET /books/author/:author`
4. **Get all books based on Title** – `GET /books/title/:title`
5. **Get book Review** – `GET /books/review/:isbn`
6. **Register New user** – `POST /register`
7. **Login as a Registered user** – `POST /login`
8. **Add/Modify a book review (registered users)** – `PUT /auth/review/:isbn`
9. **Delete book review added by that particular user (registered users)** – `DELETE /auth/review/:isbn`

Authentication for registered-user endpoints uses a JSON Web Token (JWT) sent via an `Authorization: Bearer <token>` header.

## Node.js Client Tasks

Using Axios:

10. Get all books – using an **async callback function**
11. Search by ISBN – using **Promises**
12. Search by Author – using **async/await**
13. Search by Title – using **async/await**

See `client.js` for these implementations.

## Running the project

Install dependencies:

```bash
npm install
```

Start the API server:

```bash
npm start
```

By default it listens on `http://localhost:3000`.

Then, in another terminal, run the client:

```bash
npm run client
```

You can push this folder to a public GitHub repo and use it for your lab submission.
