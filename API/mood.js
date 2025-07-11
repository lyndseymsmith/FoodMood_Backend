import express from "express";
const router = express.Router();


import { getMoods } from "../db/queries/mood.js";

router.route("/").get(async (req, res) => {
    try{
     const moods = await getMoods();
    res.send(moods);   
    }catch(error){
        console.error("Error fetching moods: error")
        res.status(500).json({error: "Failed to fetch moods"})
    }
    
});
export default router;