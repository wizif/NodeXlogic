const express = require("express");
const app = express();

// 🔹 Array of quotes
const quotes = [
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The best way to predict the future is to invent it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

// 🔹 Route: GET /quote
app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

// 🔹 Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
