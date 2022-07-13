/* exported isUpperCased */

/* GOAL: Determine whether all letters of each string are capitalized and return a Boolean value of true or false
1. Create a function with one parameter (GIVEN)
2. Create a loop to go through each letter of the word
   for (var i = 0; i < word.length; i++)
3. If letter is capitalized, run loop again.
4. If the letter is lowercased, return false.

*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    }
  }
  return false;
}
