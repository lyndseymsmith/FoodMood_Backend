import client from '../client.js'

export async function getMoods(name, description){
    const result = await client.query(`INSERT INTO moods (name, description) VALUES ($1, $2) RETURNING *;`, [name, description]
    );
    return result.rows[0];
};