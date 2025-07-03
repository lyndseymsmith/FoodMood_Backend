DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  mood TEXT NOT NULL,
  description TEXT,
  ingredients TEXT[] NOT NULL,
  instructions TEXT
);
