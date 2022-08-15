/* exported includes */
/* Create a function that will return a boolean of a value at ANY point.
Given - two parameters
Create a new variable to receive the new array
Check each value of the array by creating a (for) loop.
If there is a value that matches in the array, return True.
Otherwise, return false.
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
