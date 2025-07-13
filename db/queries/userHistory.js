import client from "../client.js";



export async function getSavedByUserId(user_id) {
  const sql = await client.query(
    `SELECT user_history.*, recipes.title, mood.emotion FROM user_history JOIN recipes ON user_history.recipes_id = recipes.id JOIN mood ON user_history.mood_id = mood.id WHERE user_history.user_id = $1;`,
    [user_id]
  );

  return sql.rows;
}

export async function saveUserMood(user_id, mood_id){
  const sql = await client.query(
    `INSERT INTO user_history (user_id, mood_id) VALUES ($1, $2);`,
    [user_id, mood_id]
  );
  return sql.rows[0];
}
