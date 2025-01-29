const express = require('express');
const app = express();
const port = 3000;

let people = [];

app.use(express.json());

app.get('/person', (req, res) => res.json(people));

app.post('/person', (req, res) => {
  const person = { id: Date.now(), ...req.body };
  people.push(person);
  res.status(201).json(person);
});

app.put('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);
  if (!person) return res.status(404).send('Person not found');
  Object.assign(person, req.body);
  res.json(person);
});

app.delete('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  people = people.filter(p => p.id !== id);
  res.sendStatus(204);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
