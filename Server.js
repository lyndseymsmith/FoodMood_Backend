
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const recipes = require('./recipes');

app.use(cors());
app.use(express.json());


app.get('/recipes', (req, res) => {
  res.json(recipes);
});


app.get('/recipes/:mood', (req, res) => {
  const mood = req.params.mood.toLowerCase();
  const filtered = recipes.filter(r => r.mood.toLowerCase() === mood);
  res.json(filtered);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
