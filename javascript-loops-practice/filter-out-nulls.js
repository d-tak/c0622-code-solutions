/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

// function filterOutNulls (values) {
//   var newArray = [];
//   var result = values.filter(null => null);
//   for (var i = 0; i < newArray.length; i++) {
//       newArray.push(result);
//   }
//   return newArray;
// }

/*
  GOAL: loop through the array
  if the item is not null push the item into a the new array
  return new array

  newArray = []
  for (var i = 0; i < inputArray.length; i++)
  if (inputArray[i] !== null) {
  newArray.push(inputArray[i]);
  }
  return newArray

  ['test', null, 123]

  newarray = ['test', 123];
  i = 3;
*/

/*
  GOAL: find and take out null - return everything else in the array.
  enter and identify values. (e.g 1, 3, 5, null)
  create a loop to execute function for the above.
  (eg. for (var i = 0; i < array.length; i++))
  (sang: check if each item is a null)
  if/else statement
  (eg. if "it" is null, i want to remove it (array[i] - null)

function test(inputArray) {
  for (let i = 0; i< inputArray.length; i++) {
    if (inputArray[i] === null) {
      inputArray.splice(i, 1);
    }
  }
  return inputArray;
}
*/
