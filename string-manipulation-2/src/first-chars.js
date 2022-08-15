/* exported firstChars */
/* Create a function that returns the amount of letters indicated by two parameters.
Function will receive two parameters (length, string)
Length is the amount of letters to include from the second parameter, string.
Create a new variable to receive the new string.
Go through the string's length and move the number of letters of the length into new string.
Return the new string.
*/

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i <= length) {
      newString = string.slice(0, length);
    }
  }
  return newString;
}

/*
function firstChars(length, string) {
  return string.slice(0, length);
}
*/
