/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.peek();
  while (stack.peek() !== undefined) {
    if (stack.peek() >= maxValue) {
      maxValue = stack.peek();
    }
    stack.pop();
  }
  return maxValue;
}
