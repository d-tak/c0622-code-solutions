/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var withSuffix = words[i] + suffix;
    newArray.push(withSuffix);
  }
  return newArray;
}
