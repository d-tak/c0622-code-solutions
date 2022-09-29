/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (first === undefined) {
    return;
  }
  if (queue.peek() === undefined) {
    return first;
  }
  if (first >= queue.peek()) {
    queue.enqueue(first);
    return queue.dequeue();
  }
  const second = queue.dequeue();
  queue.enqueue(second);
  return first;
}
