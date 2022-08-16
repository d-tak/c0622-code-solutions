/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstLetter = word.charAt(0);
  var wordLength = word.slice(1, word.length);
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } return firstLetter.toUpperCase() + wordLength.toLowerCase();
}
