import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const router = express.Router();
const JWT_SECRET = 'FoodMood2025'

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try{
        const hashed = await bcrypt.hash(password, 10);
        const user = await registerUser(username, hashed);
        res.status(201).json({message: 'User registered', user})
    }catch(error){
        
    }
})

export default router;