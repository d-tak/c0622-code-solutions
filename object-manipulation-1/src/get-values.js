/* exported getValues */

/* GOAL: to return an array of the object's property.
1. Create a function (given)
2. Create a new array to push in values.
3. loop through objects and log property values!
2. Find the value of the properties.
3. Return the property value of the object.
*/

function getValues(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(object[property]);
  }

  return newArray;
}
