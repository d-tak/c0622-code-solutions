/* exported drop */
/* Create a function that will return the value in the array AFTER the count.
Given - two parameters
Create a new variable to receive the new array
Use slice method to access necessary value and discard remaining values
(Opposite of Take - so, from the slice AT the value of count and include the subsequent values - not the former)
Return new variable with desired values.
*/

function drop(array, count) {
  var newArray = array.slice(count, (array.length));
  return newArray;
}
