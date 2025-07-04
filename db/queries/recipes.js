

const pool = require('./db'); 


const getAllRecipes = async () => {
  const result = await client.query('SELECT * FROM recipes');
  return result.rows;
};


const getRecipesByMood = async (mood) => {
  const result = await client.query('SELECT * FROM recipes WHERE mood = $1', [mood]);
  return result.rows;
};


const getRecipeById = async (id) => {
  const result = await client.query('SELECT * FROM recipes WHERE id = $1', [id]);
  return result.rows[0];
};



module.exports = {
  getAllRecipes,
  getRecipesByMood,
  getRecipeById,
  
};
