/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const head = list.data;
    const second = list.next.data;
    list.data = second;
    list.next.data = head;
  }
  return list;
}
