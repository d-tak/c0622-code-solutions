/* exported lastChars */
/* Create a function that returns the amount of letters at the end indicated by two parameters.
(eg: lastChars(8, 'All Code All Day') returns "All Day")
Function will receive two parameters (length, string)
Length is the amount of letters to include from the second parameter, string.
Create a new variable to receive the new string.
Go through the string's length and move the number of letters of the length into new string.
Return the new string.
*/

function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string[i];
    }
    return newString;
  }
}
