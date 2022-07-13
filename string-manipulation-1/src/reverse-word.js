/* exported reverseWord */

/* GOAL: to reverse the letters presented in the word property. (tac)

1. create a function (Given)
2. create a new variable (reverseWords) to recieve the reversed letters.
2. take the last letter of the word and work your way to the front.
3. write the letters in reverse order and log them to the variable.
4. return the new string to var reverseWords

*/
function reverseWord(word) {
  var reverseWords = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWords += word[i];
  }
  return reverseWords;
}

// var 2 = 3 - 1
// var reverseWords ''

// var 1 = 2 - 1
// var reverseWords t

// var 0 = 1 - 1
// var reverseWords a

// var -1 = 0 - 1
// var reverseWords c
