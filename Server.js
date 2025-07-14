
import app from './app.js';
import client from './db/client.js';
import dotenv from 'dotenv';
dotenv.config()


const PORT = process.env.PORT ?? 3000;
await client.connect()
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
