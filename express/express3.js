import express from 'express';

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON

// Initialize with 2 predefined books
let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' }
];

let nextId = 3;

// a. GET /books - Return list of all books
app.get('/books', (req, res) => {
  res.send(JSON.stringify(books));
});

// b. POST /books - Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).send('Error: Title and author are required.');
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);

  res.status(201).send(`Book added successfully: ${title} by ${author}`);
});

// c. PUT /books/:id - Update existing book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).send('Error: Book not found.');
  }

  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.send(`Book updated: ${book.title} by ${book.author}`);
});

// d. DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).send('Error: Book not found.');
  }

  const deleted = books.splice(index, 1)[0];
  res.send(`Book deleted: ${deleted.title} by ${deleted.author}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📚 Book server is running at http://localhost:${PORT}`);
});