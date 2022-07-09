/* exported countdown */
function countdown(number) {
  var numberList = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    numberList.push(currentNumber);
    currentNumber--;
  }
  return numberList;
}
