const fs = require('fs');
const data = Math.random();

fs.writeFile('random.txt', data.toString() + '\n', err => {
  console.error(err);
  process.exit(1);
  // if (err) throw err;
});
