/* exported findIndex */
// The first index at which value is found inside array.
// If it is not found, the function should return -1.

/* GOAL: Search the array at each index to find a value that matches, "value"

1. create a function (given)
2. run a loop to go through each index of the array and find any matches
3. if a matching value is found (i.e 7=7), return that value.
4. continue going through the array and if no matching values are found, return -1

*/

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
