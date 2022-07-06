var colors = ['red', 'white', 'blue'];
console.log('value of colors [0]:', colors[0]);
console.log('value of colors [1]:', colors[1]);
console.log('value of colors [2]:', colors[2]);

var string = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string);

colors[2] = 'green';

var string2 = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string2);

console.log('value of colors:', colors);

var students = ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo'];
var numberOfStudents = students.length;
var string3 = 'There are ' + numberOfStudents + ' students in the class.';
console.log(string3);

var lastIndex = numberOfStudents - 1;
// var lastIndex = students.length - 1;

var lastStudent = students[lastIndex];
var string4 = 'The last student in the array is ' + lastStudent;
console.log(string4);
console.log('value of students', students);
