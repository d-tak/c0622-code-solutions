function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 3);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var sum = '"Hey, ' + name + '"';
  return sum;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var sum = width * height;
  return sum;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var sum = person.firstName;
  return sum;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var sum = array[array.length - 1];
  return sum;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propone', 'accessories']);
console.log('getLastElement:', getLastElementResult);
