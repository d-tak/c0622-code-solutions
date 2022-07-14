/* exported isLowerCased */

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}
