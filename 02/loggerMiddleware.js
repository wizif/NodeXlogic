const express = require("express");
const app = express();

// 🔹 Middleware - logs method, path, timestamp
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`${req.method} ${req.path} - ${time}`);
  next(); // pass control to next middleware/route
});

// 🔹 Route
app.get("/users", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

// 🔹 Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
