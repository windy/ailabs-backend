const express = require('express');
const path = require('path');

// Create Express application instance
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to AI Labs Backend Server');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});