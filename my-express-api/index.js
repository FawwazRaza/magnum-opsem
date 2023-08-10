
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// ... Rest of your code ...


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
app.get('/', (req, res) => {
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
// Define a route to fetch and display products with their category names
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
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
