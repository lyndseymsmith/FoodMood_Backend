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
        if(error.code === '23505'){
            return res.status(409).json({error: 'Username already taken'})
        }else{
            res.status(500).json({error: 'Server error for registration'})
        }
    }
})


router.post('/login', verifyToken, async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await findUsername(username)
        if(!user){
            return res.status(401).json({error: 'Wrong information'})
        }

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status.json({error: 'Wrong information'})
        }
        
        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET) 
            res.status(200).json({token})
        }catch(error){
            console.log('Login error', error)
            res.status(500).json({error: 'Server error for login'})
        }
    })

export default router;