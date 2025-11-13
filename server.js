const express = require('express');
const cors = require('cors');

const generalRoutes = require('./routes/general');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Public/general routes (Tasks 1-5)
app.use('/', generalRoutes);

// Auth & registered-user routes (Tasks 6-9)
app.use('/', authRoutes);

app.get('/', (req, res) => {
  res.send('Book Review API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
