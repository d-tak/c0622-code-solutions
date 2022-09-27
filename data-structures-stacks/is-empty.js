/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  }
  return false;
}

// return typeof stack.peek() === 'undefined'; // typeof the return method is strictly equal to the string undefined.
