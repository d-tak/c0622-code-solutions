const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// if(err) { (if doesn't necessarily need true or false but needs truthy or falsy).
//   console.error(err);
//   process.exit(1);
// }
// console.log(text);
// });
