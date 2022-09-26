/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topStack = stack.pop();
  if (topStack === undefined) {
    return undefined;
  } else {
    const secondFromTop = stack.peek();
    stack.push(topStack);
    return secondFromTop;
  }
}
