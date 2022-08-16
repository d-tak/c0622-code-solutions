/* exported swapChars */
/* Create a function that receives 3 parameters and switches letters at the indicated spot
Create a new variable that will be assigned to the newString.
Go through each letter of the word
if firstIndex is equal to value of i, add to secondIndex.
if secondIndex is equal to value of i, add to firstIndex (switch!)
return newString
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
