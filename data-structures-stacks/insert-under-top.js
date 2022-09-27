/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const topValue = stack.pop();
  stack.push(value);
  stack.push(topValue);
}

// const top = stack.pop();
// if (typeof top === 'undefined') return;
// stack.push(value);
// stack.push(top);
