/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var givenArray = array[i];
    if (!Array.isArray(givenArray)) {
      newArray.push(givenArray);
    } else {
      for (var k = 0; k < givenArray.length; k++) {
        newArray.push(givenArray[k]);
      }
    }
  }
  return newArray;
}
