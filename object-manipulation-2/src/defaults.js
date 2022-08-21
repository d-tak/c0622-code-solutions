/* exported defaults */
/* Create a function that assigns properties of the source object to the target object for all properties not defined.
aka - put the missing property into target.
REMEMBER: This function doesn't return anything. It MODIFIES 'target'

Loop through each key and source (input) and check:
IF key is NOT in the target AND IF target is NOT undefined.
  if the result is no, then add and update the target.
  Otherwise move on (do not add) and return (modified) target.
  */

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return target;
}
