var letters = document.querySelectorAll('span');

function keydown(event) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].className === 'text' || letters[i].className === 'wrong') {
      var position = letters[i].textContent;
      if (event.key !== position) {
        letters[i].className = 'wrong';
      } else {
        letters[i].className = 'right';
        letters[i + 1].className = 'text';
      }
      return;
    }
  }
}

document.addEventListener('keydown', keydown);
