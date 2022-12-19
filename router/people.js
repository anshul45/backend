const express = require("express");
const router = express.Router();

router.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
router.post("/login", (req, res) => {
  res.send("Post");
});

router.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = person.find((person) => {
    person.id === Number(id);
  });
  if (!person) {
    return res.status(404).json({ msg: "person not found" });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).send(newPerson);
});

router.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = person.find((person) => {
    person.id === Number(id);
  });
  if (!person) {
    return res.status(404).json({ msg: "person not found" });
  }
  const newPerson = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, msg: "deleted " });
});

module.exports = router;
