
import app from './app.js';
import client from './db/client.js';
import {authenticateToken} from './Middleware/middleware.js';
import dotenv from 'dotenv';
dotenv.config()

app.use(authenticateToken)

const PORT = process.env.PORT ?? 3000;
await client.connect()
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
