/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

/* GOAL: find and remove all strings by running a loop and
returning the result to a new array.

create an empty array. (eg: newArray = [])
create a loop (eg. for (var i = 0; i < values.length; i++))
find the string (eg. '') and remove it.
(eg. if (typeof values.[i] !== 'string')
newArray.push(values)

return newArray

function filterOutStrings(values) {

}

*/
