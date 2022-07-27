var message = document.querySelector('h1');

function timeOutMessage() {
  message.textContent = 'Hello There';
}
setTimeout(timeOutMessage, 2 * 1000);
