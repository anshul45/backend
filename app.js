const express = require("express");
const app = express();
const middleware = require("./logger");
const authorize = require("./authorize");
//req => middleware => res

app.use("/api", middleware);
app.use(authorize);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Listening On Port: 5000");
});
