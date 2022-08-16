/* exported chunk */
/* Create a function that will group arrays by size. (chunk)
Given - two parameters
Create a new variable to receive new array
Check each item  to see if the size is less than the numbers in the array.
IF the value of the count is less than the existing array, slice it from its position and push to newArray.
IF the value of the count is larger than the exiting array, simply print (return) the array.
Return newArray.
*/

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    if (i < array.length) {
      newArray.push(array.slice(i, size + i));
    } else {
      return array;
    }
  }
  return newArray;
}
