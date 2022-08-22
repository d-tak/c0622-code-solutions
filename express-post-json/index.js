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
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201);
  res.send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
