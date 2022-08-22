/* exported pick */
/* Create a function that returns a new object containing all properties of the input object
If a key is listed in keys, but not defined in source, then do not add.
Create a new variable of an empty object to be updated at return.
Check values of keys (loop)
IF the source and keys match, then include in newObject.
*/

function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
