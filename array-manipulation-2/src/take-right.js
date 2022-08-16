/* exported takeRight */
/* Create a function that will return the value of the LAST elements in the array
Given - two parameters
Create a new variable to receive the new array
IF the value of the count is larger than the exiting array, simply print (return) the array.

Check each value of the array by creating a (for) loop.
   GO BACKWARDS (last item to first (right to left))
IF the count matches, push values to newArray.
Return newArray.
*/

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

//   return array.slice(-count);
// }
