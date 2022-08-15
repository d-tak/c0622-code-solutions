/* exported capitalizeWords */

/* Create a function that has one parameter - string
Assign a variable where the first letter of every word is capitalized.
Loop through each parameter (string) and capitalize first letter
and lowercase the rest of the word
Add a space (' ') between words

return the value of the string (result of the function)
*/

function capitalizeWords(string) {
  var capitalizedString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capitalizedString += string[i].toUpperCase();
    } else {
      capitalizedString += string[i].toLowerCase();
    }
  }
  return capitalizedString;
}
