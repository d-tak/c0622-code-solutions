/* exported capitalize */

/* GOAL: Capitalize the first character of each string with lowercase letters for the remaining letters and return its value.
1. Create a function with one parameter (GIVEN)
2. Capitalize first letter of string (How? Use a method.)
   word.toUpperCase());
3. Return the LAST character of the string.

*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() +
  word.slice(1).toLowerCase();
}
