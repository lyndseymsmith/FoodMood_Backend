import client from '../client.js';

export async function getSavedByUserId(user_id) {
    const sql = await client.query(`SELECT * FROM saved WHERE`)
}