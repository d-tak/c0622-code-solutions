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

// const top = stack.pop();
// if (typeof top === 'undefined') return; // GUARD CLAUSE
// const next = stack.peek();
// stack.push(top);
// return next;
