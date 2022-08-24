const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
let nextId = data.nextId;

app.get('/api/notes', (req, res) => {
  const newArray = [];
  for (const key in data.notes) {
    newArray.push(data.notes[key]);
  }
  res.status(200);
  res.json(newArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400);
    res.json({ Error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404);
    res.json({ Error: `cannot find note with id ${id}` });
  } else {
    res.status(200);
    res.json(data.notes[req.params.id]);
  }
});

app.use(express.json());
app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    res.json({ Error: 'content is a required field' });
  } else {
    req.body.id = nextId;
    data.notes[nextId] = req.body;
    nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ Error: 'An unexpected error occurred.' });
      } else {
        res.status(201);
        res.json(data.notes[req.body]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteById = Number(req.params.id);
  if (!Number.isInteger(deleteById) || deleteById <= 0) {
    res.status(400);
    res.json({ Error: 'id must be a positive integer' });
  } else if (!data.notes[deleteById]) {
    res.status(404);
    res.json({ Error: `cannot find note with id ${deleteById}` });
  } else {
    delete data.notes[deleteById];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ Error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const replaceById = Number(req.params.id);
  if (!Number.isInteger(replaceById) || replaceById <= 0) {
    res.status(400);
    res.json({ Error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400);
    res.json({ Error: 'content field is required' });
  } else if (data.notes[replaceById] === undefined) {
    res.status(404);
    res.json({ Error: `cannot find note with id ${replaceById}` });
  } else {
    data.notes[replaceById].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ Error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(201);
        res.json(data.notes[replaceById]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
