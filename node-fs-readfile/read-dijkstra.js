const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// if we don't throw the error, it will throw a silent error.
// when you throw an error in node js, it throws process.on('uncaughtException', err => {
//   console.error(err);
//   process.exit(1);
// });

// console.error(err);
// process.exit(1);
// When a process exits, it exits with a status code.
// The default value is 0
// Anything that's not a zero is a failure.
