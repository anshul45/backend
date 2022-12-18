const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  res.json([{ product: "product" }]);
});

app.listen(5000, () => {
  console.log("Listening on port : 5000");
});
