const express = require("express");
const app = express();

// GET /add?a=5&b=3
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ result: a + b });
});

// GET /multiply?a=4&b=2
app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ result: a * b });
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Calculator API running at http://localhost:${PORT}`);
});
