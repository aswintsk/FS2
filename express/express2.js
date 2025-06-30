import express from 'express';

const app = express();
app.use(express.json());

// In-memory product catalog
let products = [
  { id: 1, name: 'Laptop', price: 75000, stock: 10 },
  { id: 2, name: 'Smartphone', price: 30000, stock: 25 },
  { id: 3, name: 'Headphones', price: 1500, stock: 50 }
];

let nextId = 4;

// GET /products - Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products - Add a new product
app.post('/products', (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || price === undefined || stock === undefined) {
    return res.status(400).json({ error: 'Name, price, and stock are required.' });
  }

  const newProduct = { id: nextId++, name, price, stock };
  products.push(newProduct);

  res.status(201).json({ message: 'Product added successfully.', product: newProduct });
});

// PUT /products/:id - Update a product
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price, stock } = req.body;

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found.' });
  }

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (stock !== undefined) product.stock = stock;

  res.json({ message: 'Product updated successfully.', product });
});

// DELETE /products/:id - Delete a product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found.' });
  }

  const deleted = products.splice(index, 1)[0];
  res.json({ message: 'Product deleted successfully.', product: deleted });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});