/* exported sumAll */

function sumAll(numbers) {
  var totalNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i];
  }
  return totalNumber;
}
