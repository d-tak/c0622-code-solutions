const fs = require('fs');

fs.writeFile('note.txt', process.argv[2] + '\n', 'utf8', err => {
  // console.error(err);
  // process.exit(1);
  if (err) throw err;
});
