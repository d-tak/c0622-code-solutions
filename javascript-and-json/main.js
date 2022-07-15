
var books = [
  {
    'isbn:': '978-1491929483',
    'title:': 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    'author:': 'Lindsay Bassett'
  },
  {
    'isbn:': '978-1484218624',
    'title:': 'JSON Quick Syntax Reference',
    'author:': 'Wallace Jackson'
  },
  {
    'isbn:': '978-0692232699',
    'title:': 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    'author:': 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

JSON.stringify('books', books);
console.log('JSON.stringify(books)', JSON.stringify(books));
console.log('typeof JSON.stringify(books): ', typeof JSON.stringify(books));

var student = '{"numberId:":1234, "studentName":"Daniel Tak"}';
console.log('student: ', student);
console.log('typeof student: ', typeof student);

var studentDesc = JSON.parse(student);
console.log('studentDesc: ', studentDesc);
console.log('typeof studentDesc: ', typeof studentDesc);
