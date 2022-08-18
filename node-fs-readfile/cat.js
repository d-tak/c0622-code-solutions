const fs = require('fs');

fs.readFile(process.argv.splice(2), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
