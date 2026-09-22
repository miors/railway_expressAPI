const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config(); 
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

app.get('/secret', (req, res) => {
  const providedKey = req.headers['x-api-key'];
  if (providedKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ message: 'You found the secret data!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
