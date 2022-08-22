/* exported invert */
/* Create a function that returns switch (invert) the keys and values of source.
Create a new variable of an empty object to be updated at return.
Loop through each key and source (input)
Push each key into newObj but print in switched order
Return newObj  */

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
