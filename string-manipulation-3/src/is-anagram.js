/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.replace(' ', '');
  var string2 = secondString.replace(' ', '');
  var split1 = string1.split('');
  var split2 = string2.split('');
  var sort1 = split1.sort();
  var sort2 = split2.sort();
  var join1 = sort1.join('');
  var join2 = sort2.join('');

  for (var i = 0; i < join1.length; i++) {
    if (join1[i] === join2[i]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
