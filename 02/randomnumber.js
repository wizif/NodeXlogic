const express = require("express");
const app = express();

app.get("/random-number", (req, res) => {
  const min = parseInt(req.query.min);
  const max = parseInt(req.query.max);

  if (isNaN(min) || isNaN(max)) {
    return res.status(400).json({ error: "Please provide valid min and max values" });
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({ number: random });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
