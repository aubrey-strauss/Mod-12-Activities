// Lesson 3: Express Routing — Activities 1 & 2
// Run with:  node server.js   (after: npm init -y && npm install express)

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

// Activity 1: Dynamic Product Route

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  res.send(`Fetching data for product with ID: ${productId}`);
});

// Activity 2: API Search Route

app.get("/api/products", (req, res) => {
  const { category, minPrice } = req.query;

  if (category && minPrice) {
    res.send(
      `Searching for products in category: ${category} with a minimum price of $${minPrice}`,
    );
  } else {
    res.send(`Showing all products`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
