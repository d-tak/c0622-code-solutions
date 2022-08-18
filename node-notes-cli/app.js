const fs = require('fs');
const data = require('./data.json');

// read a note
if (process.argv[2] === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}

// add a note
if (process.argv[2] === 'create') {
  const nextId = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[nextId] = newNote;
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', jsonNote, 'utf8', err => {
    if (err) throw err;
  });
}

// delete a note
if (process.argv[2] === 'delete') {
  const nextId = process.argv[3];
  delete data.notes[nextId];
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', jsonNote, 'utf8', err => {
    if (err) throw err;
  });
}

// update a note
if (process.argv[2] === 'update') {
  const nextId = process.argv[3];
  const updateNote = process.argv[4];
  data.notes[nextId] = updateNote;
  const jsonNote = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', jsonNote, 'utf8', err => {
    if (err) throw err;
  });
}
