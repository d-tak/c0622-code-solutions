/* exported initial */

/* GOAL: to get all the items of the array EXCEPT the last and log it in the return.

1. Create a function (given)
2. Create a loop to go through each item of the array.
   for (var i = 0; i < array.length; i++)
3. take each item of the array
4. push each item into the new array.
5. stop the loop at the last item of the array.
6. Return the newArray

*/

function initial(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (i === array.length - 1) {
      // THEN STOP!!
    }
  }
  return newArray;
}
