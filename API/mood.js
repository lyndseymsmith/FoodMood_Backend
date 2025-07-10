import express from "express";
const router = express.Router();
export default router;

import { createMoods } from "../db/queries/mood";

router.route("/").get(async (req, res) => {
    const moods = await createMoods();
    res.send(moods);
});
