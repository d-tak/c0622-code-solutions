const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseInt(process.argv[2]);
const opr = process.argv[3];
const y = Number(process.argv[4]);

if (opr === 'plus') {
  console.log('result:', add(x, y));
} else if (opr === 'minus') {
  console.log('result:', subtract(x, y));
} else if (opr === 'times') {
  console.log('result:', multiply(x, y));
} else if (opr === 'over') {
  console.log('result:', divide(x, y));
}
