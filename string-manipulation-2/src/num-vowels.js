/* exported numVowels */

/* create a function with one parameter (string)
Create a new variable with a value of 0 - that will be updated at the end!
Create a new variable that will be assigned to the string converted to all lowercase letters
Cycle through each character of each word to check for vowels
if matched, increment value of variable by 1
*/

function numVowels(string) {
  var vowelCount = 0;
  var lowercase = string.toLowerCase();
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === 'a' || lowercase[i] === 'e' || lowercase[i] === 'i' ||
      lowercase[i] === 'o' || lowercase[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
