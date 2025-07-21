
import client from '../client.js';

export async function createRecipes(title, mood_id, description, ingredients, instructions, image_url) {
  const result = await client.query(
    `
    INSERT INTO recipes (title, mood_id, description, ingredients, instructions, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `,
    [title, mood_id, description, ingredients, instructions, image_url]
  );

  return result.rows[0];
}


export async function getAllRecipes() {
  const result = await client.query('SELECT * FROM recipes');
  return result.rows;
};


export async function getRecipesByMood(emotion) {
  const result = await client.query('SELECT * FROM recipes WHERE emotion = $1', [emotion]);
  return result.rows;
};


export async function getRecipeById(id) {
  const result = await client.query('SELECT * FROM recipes WHERE id = $1', [id]);
  return result.rows[0];
};


