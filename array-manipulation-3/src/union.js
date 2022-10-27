/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var f = 0; f < second.length; f++) {
    if (!newArray.includes(second[f])) {
      newArray.push(second[f]);
    }
  }
  return newArray;
}
