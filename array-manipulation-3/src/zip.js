/* exported zip */
function zip(first, second) {
  var array = Math.min(first.length, second.length);
  var newArray = [];
  for (var i = 0; i < array; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
