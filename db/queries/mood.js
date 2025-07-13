import client from "../client.js";

export async function createMoods(emotion, description) {
  const result = await client.query(
    `INSERT INTO moods (emotion, description) VALUES ($1, $2) RETURNING *;`,
    [emotion, description]
  );
  return result.rows[0];
}

export async function getMoods(){
    const result = await client.query(
        `SELECT * FROM moods;`
    )
    return result.rows
}

export async function saveUserMood(user_id, mood_id){
    const result = await client.query(
        `INSERT INTO user_history (user_id, mood_id, action_type) VALUES ($1, $2, $3) RETURNING *;`,
        [user_id, mood_id, 'tracked']
    );
    return result.rows;
}

export async function getMoodCounts(user_id){
    const result = await client.query(
        `SELECT moods.emotion, COUNT(*) AS count FROM user_history JOIN moods ON user_history.mood_id = moods.id WHERE user_history.user_id = $1 GROUP BY moods.emotion`,
        [user_id]
    )
    return result.rows;
}
