/* exported titleCase */
function titleCase(title) {

  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'The', 'as', 'at',
    'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newString = '';
  var splitWord = title.split(' ');

  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].toLowerCase() === 'javascript') {
      splitWord.splice(i, 1, 'JavaScript');
    } else if (splitWord[i].toLowerCase() === 'javascript:') {
      splitWord.splice(i, 1, 'JavaScript:');
    } else if (splitWord[i].toLowerCase() === 'api') {
      splitWord.splice(i, 1, 'API');
    } else if (minorWords.includes(splitWord[i])) {
      splitWord.splice(i, 1, splitWord[i].toLowerCase());
    } else {
      splitWord.splice(i, 1, splitWord[i][0].toUpperCase() + splitWord[i].slice(1).toLowerCase());
    }
  }
  var newTitle = splitWord.join(' ');
  for (var k = 0; k < newTitle.length; k++) {
    if (newTitle[k] === ':') {
      newTitle = newTitle.slice(0, k + 1) + ' ' + newTitle[k + 2].toUpperCase() + newTitle.slice(k + 3, newTitle.length);
    } else if (newTitle[k] === '-') {
      newTitle = newTitle.slice(0, k + 1) + newTitle[k + 1].toUpperCase() + newTitle.slice(k + 2, newTitle.length);

    }
  }
  newString = newTitle[0].toUpperCase() + newTitle.slice(1);
  return newString;
}
