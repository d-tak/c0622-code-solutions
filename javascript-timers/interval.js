var message = document.querySelector('h1');
var countdown = 4;
var timer = setInterval(updatedMessage, 1000);

function updatedMessage() {
  countdown--;
  message.textContent = countdown;
  if (countdown === 0) {
    message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
