import express from 'express';
import usersRouter from './API/users.js';

const app = express();


app.use(express.json());


app.use('users', usersRouter);
app.use('/api/users', usersRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Sorry! Something went wrong")
});

export default app; 
