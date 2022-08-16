/* exported dropRight */
/* Create a function that will return the value the array AFTER the count is dropped from the end.
Given - two parameters
Create a new variable to receive the new array
IF the value of the count is larger than the exiting array, simply print (return) the array.

Check each value of the array by creating a (for) loop -
   GO BACKWARDS (starting from array.length - count)
IF the count matches, push values to newArray.
Return newArray.
*/

function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
