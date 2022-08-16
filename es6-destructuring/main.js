const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title, author, libraryID } = book1;
// 1. What is being destructured?  Object properties or array elements
// 2. Where is it being destructured from?
// 3. What are the destructured properties or elements being assigned to?
// READ: The title, author, and libraryID PROPERTIES are being destructured
// FROM book 1 object
// and they are being assigned to the const variables title, author, and libraryID

console.log(`The title of the book is ${title}, the author is ${author},
and the libary id is ${libraryID}`);
// backtick is read template literal.

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: bookTitle, author: authorName, libraryID: libraryIDNumber } = book2;
// and they are being assigned to the const variables bookTitle, authorName, and libraryIDNumber

console.log(`The title of the book is ${bookTitle}, the author is ${authorName},
and the libary id is ${libraryIDNumber}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [, , , book6] = library;
// const book6 = library[3] (this is the same as line 59)
console.log('book6:', book6);
