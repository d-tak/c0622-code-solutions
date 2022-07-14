/* exported isVowel */

/* GOAL: find out if the letter in the string is a vowel.
1. Create a function (given)
2. create a new variable to handle both upper and lowercase letters
3. check if letter in the string is a vowel (no loop necessary)
4. if it is a vowel, return true... otherwise, return false.

*/

function isVowel(character) {
  var newVowel = character.toLowerCase();
  if (newVowel === 'a' || newVowel === 'e' || newVowel === 'i' || newVowel === 'o' || newVowel === 'u') {
    return true;
  }
  return false;
}

/*
for (var i = 0; i < character.length; i++) {
if (newVowel.charAt(i) === 'a' || newVowel.charAt(i) === 'e' || newVowel.charAt(i) === 'i' || newVowel.charAt(i) === 'o' || newVowel.charAt(i) === 'u') {
  return true;
}
  }
return false;
}
*/
