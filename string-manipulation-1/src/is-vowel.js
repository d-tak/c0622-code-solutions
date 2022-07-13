/* exported isVowel */

function isVowel(character) {
  var newVowel = character.toLowerCase();

  for (var i = 0; i < character.length; i++) {
    if (newVowel.charAt(i) === 'a' || newVowel.charAt(i) === 'e' || newVowel.charAt(i) === 'i' || newVowel.charAt(i) === 'o' || newVowel.charAt(i) === 'u') {
      return true;
    }
  }
  return false;
}
