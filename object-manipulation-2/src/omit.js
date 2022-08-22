/* exported omit */
/* Create a function that returns a new object containing all properties NOT in the input object
If a key IS listed in keys, then do NOT add.
Create a new variable of an empty object to be updated at return.
Check values of keys (loop)
IF the source and keys match, then include in newObject. */

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

// function omit(source, keys) {
//   var newObj = {};
//   for (var key in source) {
//     newObj[key] = source[key];
//   }
//   for (var i = 0; i < keys.length; i++) {
//     if (newObj[keys[i]]) {
//       delete newObj[keys[i]];
//     }
//   }
//   return newObj;
// }
