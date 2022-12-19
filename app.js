const express = require("express");
const app = express();
const people = require("./router/people");
const auth = require("./router/auth");
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Listening on port : 5000 ");
});
