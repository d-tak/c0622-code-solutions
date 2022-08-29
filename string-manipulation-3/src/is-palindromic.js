/* exported isPalindromic */
function isPalindromic(string) {
  var noSpace = string.replace(' ', '');
  var split = noSpace.split('');
  var reverse = split.reverse();
  var reverseString = reverse.join('');
  if (noSpace === reverseString) {
    return true;
  }
  return false;
}
