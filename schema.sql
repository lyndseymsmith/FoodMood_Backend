DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS moods;
DROP TABLE IF EXISTS recipes;


CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  mood TEXT NOT NULL,
  description TEXT,
  ingredients TEXT[] NOT NULL,
  instructions TEXT
);


CREATE TABLE moods (
  id SERIAL PRIMARY KEY,
  emotion TEXT NOT NULL,
  description TEXT
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);


