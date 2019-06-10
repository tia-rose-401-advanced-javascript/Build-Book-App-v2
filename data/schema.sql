DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS bookshelves;

CREATE TABLE IF NOT EXISTS bookshelves (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255)
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn TEXT,
  image_url TEXT,
  description TEXT,
  bookeshelf_id INT REFERENCES bookshelves(id)
);

CREATE TABLE BOOKSHELVES (id SERIAL PRIMARY KEY, name VARCHAR(255));

INSERT INTO bookshelves(name) SELECT DISTINCT bookeshelf FROM books;

ALTER TABLE books ADD COLUMN bookeshelf_id INT;

UPDATE books SET bookeshelf_id=subquery.id FROM (SELECT * FROM bookeshelves) AS subquery WHERE books.bookeshelf = subquery.name;

ALTER TABLE books DROP COLUMN bookeshelf;

ALTER TABLE books ADD CONSTRAINT fk_bookshelves FOREIGN KEY (bookeshelf_id) REFERENCES bookeshelves(id);