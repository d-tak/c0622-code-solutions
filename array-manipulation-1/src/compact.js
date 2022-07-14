/* exported compact */

/* GOAL: return a new array with falsy values removed.

1. Create function (Given)
2. Create a new array to push in values.
3. create a loop
4. go through each item of the loop and determine whether they are true/false
5. if (true) --> push to new array.
6. if (false) --> do NOTHING.
7. complete loop
8. return newArray

*/

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
