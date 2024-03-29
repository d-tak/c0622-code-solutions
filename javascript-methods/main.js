var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = (Math.max(num1, num2, num3));
console.log('maximumValue: ', maximumValue);

var heroes = ['batman', 'superman', 'ironman', 'thor'];

var randomNumber = (Math.random());
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [{
  title: 'Title 1',
  author: 'Author 1'
},
{
  title: 'Title 2',
  author: 'Author 2'
},
{
  title: 'Title 3',
  author: 'Author 3'
}];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Daniel Tak';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
