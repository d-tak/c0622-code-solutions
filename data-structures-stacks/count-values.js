/* exported countValues */

function countValues(stack) {
  let n = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    n++;
  }
  return n;
}

// let count = 0
// while(typeof stack.pop() !== 'undefined') {
//   count ++;
// }
// return count;
