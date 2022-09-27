/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const second = queue.dequeue();
  queue.enqueue(second);
  return queue.dequeue();
}
