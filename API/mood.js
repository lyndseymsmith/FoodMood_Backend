import express from "express";
const router = express.Router();
export default router;

import { getMoods } from "../db/queries/mood.js";

router.route("/").get(async (req, res) => {
    const moods = await getMoods();
    res.send(moods);
});
