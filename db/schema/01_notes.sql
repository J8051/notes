DROP TABLE IF EXISTS notes CASCADE;
CREATE TABLE notes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
