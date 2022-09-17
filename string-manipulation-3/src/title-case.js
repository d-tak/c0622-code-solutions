/* exported titleCase */
function titleCase(title) {

  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at',
    'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newString = '';
  var splitWord = title.split(' ');
  var processedWords = [];

  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].toLowerCase() === 'javascript') {
      processedWords.push('JavaScript');
    } else if (splitWord[i].toLowerCase() === 'javascript:') {
      processedWords.push('JavaScript:');
    } else if (splitWord[i].toLowerCase() === 'api') {
      processedWords.push('API');
    } else if (minorWords.includes(splitWord[i].toLowerCase())) {
      processedWords.push(splitWord[i].toLowerCase());
    } else {
      processedWords.push(splitWord[i][0].toUpperCase() + splitWord[i].slice(1).toLowerCase());
    }
  }
  var newTitle = processedWords.join(' ');
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
