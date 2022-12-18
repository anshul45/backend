const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  res.json([{ product: "product" }]);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];

  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
  console.log("Listening on port : 5000");
});
