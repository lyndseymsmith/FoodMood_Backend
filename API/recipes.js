
import express from 'express';


const router = express.Router();
import client from '../db/client.js';


export default router;
router.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query(`SELECT recipes.*, moods.emotion, playlists.url AS playlist_url FROM recipes JOIN moods ON recipes.mood_id = moods.id JOIN playlists ON playlists.mood_id = moods.id WHERE recipes.id = $1`, [id]);
      
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
})

router.get('/mood/:mood', async (req, res) => {
  const { mood } = req.params;
  try {
    const result = await client.query(
      `SELECT recipes.* 
      FROM recipes 
      JOIN moods ON recipes.mood_id = moods.id 
      WHERE LOWER(moods.emotion) = $1;`,
      [mood.toLowerCase()]
    );
    res.json(result.rows);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
});

