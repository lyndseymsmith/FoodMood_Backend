// const pool = require('./db'); 
import client from '../client.js';

export async function getAllRecipes() {
  const result = await client.query('SELECT * FROM recipes');
  return result.rows;
};


export async function getRecipesByMood(mood) {
  const result = await client.query('SELECT * FROM recipes WHERE mood = $1', [mood]);
  return result.rows;
};


export async function getRecipeById(id) {
  const result = await client.query('SELECT * FROM recipes WHERE id = $1', [id]);
  return result.rows[0];
};



// module.exports = {
//   getAllRecipes,
//   getRecipesByMood,
//   getRecipeById,
  
// };
