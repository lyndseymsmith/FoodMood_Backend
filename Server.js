
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const recipes = require('./recipes');

app.use(cors());
app.use(express.json());


app.get('/recipes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get('/recipes/:mood', async (req, res) => {
  const { mood } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM recipes WHERE mood = $1',
      [mood.toLowerCase()]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// import app from './app.js
//import client from './db/client.js

//cont PORT = process.env.PORT ?? 3000;
//await client.connect()
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
