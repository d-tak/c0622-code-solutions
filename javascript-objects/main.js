var student = {
  firstName: 'Daniel',
  lastName: 'Tak',
  age: '38'
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = 'false';
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'bmw',
  model: 'x5',
  year: '2022'
};

vehicle['color'] = 'black';
vehicle['isConvertable'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertable']:", vehicle['isConvertable']);

console.log('value of vehicle', vehicle);

var pet = {
  name: 'coco',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
