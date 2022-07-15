/* exported toObject */

/* GOAL: return an object with one property containing two elements

1. Create a function (given)
2. create a new variable to return (new obj) = empty object literal {}
3. take the first element of the array equal to the key of the object
4. take the second element of the array and set it equal to the value of the key.
5. return!
*/

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;

}
