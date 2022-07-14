/* exported reverse */

/* GOAL A new array containing all elements of array in reverse order.
1. Create Function (given)
2. Create a new empty array to push in values
3. Create a loop to go through the Array (BACKWARDS)
4. initialize at last index.
5.
*/

function reverse(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
