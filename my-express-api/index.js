

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost', // Change to your MySQL host
  user: 'root', // Change to your MySQL username
  password: '', // Change to your MySQL password
  database: 'fagex_co'
});

// Connect to the database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Define a route to fetch and display category names
app.get('/categories', (req, res) => {
  const query = 'SELECT name FROM category';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching data from database' });
    } else {
      const categoryNames = results.map(category => category.name);
      res.json({ categories: categoryNames });
    }
  });
});

// Define a route to add data to the "category" table
app.post('/categories', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const insertQuery = 'INSERT INTO category (name) VALUES (?)';

  db.query(insertQuery, [name], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error adding data to database' });
    } else {
      res.status(201).json({ message: 'Data added successfully', category: { name } });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/products', (req, res) => {
  const query = `
    SELECT p.id AS product_id, p.name AS product_name, p.price AS product_price, p.description AS product_description,
           c.name AS category_name
    FROM products p
    JOIN category c ON p.category_id = c.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err); // Log the error message
      res.status(500).json({ error: 'Error fetching data from database' });
    } else {
      res.json({ products: results });
    }
  });
});

app.post('/products', (req, res) => {
  const { product_name, product_price, product_description, category_id } = req.body;

  if (!product_name || !product_price || !category_id) {
    return res.status(400).json({ error: 'Product name, price, and category ID are required' });
  }

  const insertQuery = 'INSERT INTO products (name, price, description, category_id) VALUES (?, ?, ?, ?)';

  db.query(insertQuery, [product_name, product_price, product_description, category_id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({
        message: 'Product added successfully',
        product: {
          product_name,
          product_price,
          product_description,
          category_id
        }
      });
    }
  });
});
// Define a route to delete a category by ID
app.delete('/categories/:category', (req, res) => {
  const category = req.params.category;

  const deleteQuery = 'DELETE FROM category WHERE name = ?';

  db.query(deleteQuery, [category], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting category from database' });
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  });
});

// Define a route to delete a product by ID
app.delete('/delete_products/:productId', (req, res) => {
  const productId = req.params.productId;

  const deleteQuery = 'DELETE FROM products WHERE id = ?';

  db.query(deleteQuery, [productId], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting product from database' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  });
});