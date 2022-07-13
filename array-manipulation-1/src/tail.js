/* exported tail */

/* GOAL: to get the first item of the array and log it in the return.

1. Create a function (given)
2. Create a loop to go through each item of the array.
   for (var i = 1; i < array.length; i++)
2. skip over the first item of the array (var i = 1)
3. take the remaining items of the array (array[i] NOT JUST i!!!)
4. push the remaining items into a newArray
5. Return the newArray

*/

function tail(array) {
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;

}
