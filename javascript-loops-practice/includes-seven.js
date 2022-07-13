/* exported includesSeven */

/* GOAL: go through all numbers and find any value of 7
by running a loop and return a boolean result (true/false)

create a function to find all forms of the value 7
function includesSeven (array)

create a way to go through and check all of the numbers entered
(create a loop (eg. for (var i = 0; i < values.length; i++))

find if the value 7 is present by going through each value of the array.
(if (array[i] === 7))

If 7 is found, return a boolean value of true.
Otherwise, return false.

*/

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
