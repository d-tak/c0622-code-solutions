/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return;
  } while (list.next.next) {
    list = list.next;
  }
  list.next = null;
}
