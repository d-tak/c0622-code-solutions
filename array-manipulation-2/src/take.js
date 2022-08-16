/* exported take */
/* Create a function that will return the value of the count in the array.
Given - two parameters
Create a new variable to receive the new array
Use slice method to access necessary value and discard remaining values
Return new variable with desired values.
*/

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
