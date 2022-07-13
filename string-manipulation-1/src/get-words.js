/* exported getWords */

// if we have an empty string, we should return an empty array

function getWords(string) {
  var newArray = [];
  var words = string.split(' ');
  if (string === '') {
    return newArray;
  } else {
    return words;
  }
}
