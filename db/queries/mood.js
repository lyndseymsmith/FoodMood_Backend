import client from '../client.js'

export async function getMoods(){
    const result = await client.query('SELECT * FROM moods;')
    return result.rows;
};