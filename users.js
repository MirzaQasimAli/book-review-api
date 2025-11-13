// Very simple in-memory user store.
// In a real app you would NEVER store passwords like this.
const users = [];

function isValidUser(username) {
  return users.some((u) => u.username === username);
}

function authenticateUser(username, password) {
  return users.find((u) => u.username === username && u.password === password);
}

module.exports = {
  users,
  isValidUser,
  authenticateUser,
};
