import client from "../client.js";



export async function getSavedByUserId(user_id) {
  const sql = await client.query(
    `SELECT user_history.*, moods.emotion FROM user_history JOIN recipes ON user_history.recipes_id = recipes.id JOIN moods ON user_history.mood_id = moods.id WHERE user_history.user_id = $1;`,
    [user_id]
  );

  return sql.rows;
}

export async function saveUserMood(user_id, mood_id){
    const sql = await client.query(
    `INSERT INTO user_history (user_id, mood_id, action_type) VALUES ($1, $2, $3) RETURNING *;`,
    [user_id, mood_id, 'tracked']
    );
  return sql.rows[0];
}
