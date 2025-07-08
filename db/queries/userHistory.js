import client from "../client.js";

export async function getSavedByUserId(user_id) {
  const sql = await client.query(
    `SELECT saved.*, recipes.title, mood.emotion FROM saved JOIN recipes ON saved.recipes_id = recipes.id JOIN mood ON saved.mood_id = mood.id WHERE saved.user_id = $1;`,
    [user_id]
  );

  return sql.rows;
}
