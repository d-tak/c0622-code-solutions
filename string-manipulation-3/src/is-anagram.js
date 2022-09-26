/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.replaceAll(' ', '');
  var string2 = secondString.replaceAll(' ', '');
  var split1 = string1.split('');
  var split2 = string2.split('');
  var sort1 = split1.sort();
  var sort2 = split2.sort();
  var join1 = sort1.join('');
  var join2 = sort2.join('');

  if (join1 === join2) {
    return true;
  } else {
    return false;
  }
}
