/* exported reverseWords */
function reverseWords(string) {
  var splitString = string.split(' ');
  var reversedWord = '';

  for (var i = 0; i < splitString.length; i++) {
    for (var f = splitString[i].length - 1; f >= 0; f--) {
      reversedWord += splitString[i][f];
    }
    if (i < splitString.length - 1) {
      reversedWord += ' ';
    }
  }
  return reversedWord;
}
