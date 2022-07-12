/* exported oddOrEven */

// A new array containing strings
// that indicate whether the corresponding number was 'odd' or 'even'.

/*
GOAL - identify odd and even numbers in numbers array and push the words 'odd' or 'even,' in order, into a new array

1. create an empty array to push the new values from below with a new variable (given)
2. create a function (given)
3. run a loop to go through each index of the numbers array.
4. after EACH iteration, print "odd" or "even" depending on the value of the number in the array
5. push "odd" or "even" into the new array.
6. run next iteration of loop and repeat 4 & 5 until loop is complete.
7. return new array with strings corresponding with numbers as odd or even.
*/

function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
