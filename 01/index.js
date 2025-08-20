const express = require("express");
const app = express();

// 1. Middleware → logs method & path
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next(); // continue to the next route/middleware
});

// 2. Route → GET /greet/:name
app.get("/greet/:name", (req, res) => {
  const { name } = req.params; // extract "name" from URL
  res.json({ message: `Hello ${name}` });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
