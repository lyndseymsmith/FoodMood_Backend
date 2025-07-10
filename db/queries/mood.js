import client from "../client.js";

export async function createMoods(emotion, description) {
  const result = await client.query(
    `INSERT INTO moods (emotion, description) VALUES ($1, $2) RETURNING *;`,
    [emotion, description]
  );
  return result.rows[0];
}

export async function saveUserMood(user_id, mood_id){
    const result = await client.query(
        `INSERT INTO user_history (user_id, mood_id) VALUES ($1, $2);`,
        [user_id, mood_id]
    );
    return result.rows;
}

export async function getMoodCounts(user_id){
    const result = await client.query(
        `SELECT moods.emotion, COUNT(*) AS count FROM saved JOIN mood ON user_history.mood_id = mood.id WHERE user_history.user_id = $1 GROUP BY moods.emotion`,
        [user_id]
    )
    return result.rows
}
