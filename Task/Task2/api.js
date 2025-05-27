const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = []; // In-memory array

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Add a new item
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json({ message: 'Item added', item });
});

app.listen(PORT, () => {
  console.log(`Item API running at http://localhost:${PORT}`);
});
