import client from '../client.js'

export async function createMoods(){
    const result = await client.query('SELECT * FROM moods;')
    return result.rows;
};