const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  res.json(req.body);
  grades[nextId] = req.body;
  req.body.id = nextId;
  nextId++;
  res.status(201);
  res.send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
