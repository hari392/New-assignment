const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware to handle CORS and JSON body
app.use(cors());
app.use(bodyParser.json());

// Database setup (replace with your actual database logic)
const db = require('./db'); // Use your PostgreSQL DB connection

// POST route to create action item
app.post('/api/action-items', async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;

  try {
    // Insert the new action item into the database
    const result = await db.query(
      `INSERT INTO action_items (title, description, due_date, priority, status, created_date)
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [title, description, dueDate, priority, status]
    );

    // Respond with the created action item
    res.status(201).json(result.rows[0]);
} catch (err) {
    console.error('Error inserting action item:', err); // Log full error
    res.status(500).json({ message: 'Error adding action item', error: err.message });
  }
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
