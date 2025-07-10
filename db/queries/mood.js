import e from "express";
import client from "../client.js";

export async function createMoods(emotion, description) {
  const result = await client.query(
    `INSERT INTO moods (emotion, description) VALUES ($1, $2) RETURNING *;`,
    [emotion, description]
  );
  return result.rows[0];
}
