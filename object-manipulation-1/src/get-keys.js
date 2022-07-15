/* exported getKeys */

/* GOAL: to return an array of the object's property keys.
1. Create a function (given)
2. Create a new array for the return of property keys
3. Create a loop to go through the object AT keys
4. push the value of the keys to the new array
5. Return the newArray.
*/

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
