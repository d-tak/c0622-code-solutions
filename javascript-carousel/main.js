var $container = document.querySelector('.container');
var $image = document.querySelectorAll('.image');
var $circleFocus = document.querySelectorAll('.circle-focus');

$container.addEventListener('click', arrowRight);
$container.addEventListener('click', arrowLeft);
$container.addEventListener('click', circleClick);

var i = 0;
function arrowRight(event) {
  if (event.target.getAttribute('class') === 'fa-solid fa-angle-right arrow-size') {
    if (i < $image.length - 1) {
      $image[i].className = 'image hidden';
      $image[i + 1].className = 'image';
      $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
      $circleFocus[i + 1].className = 'fa-solid fa-circle circle-focus';
      i++;
    } else if (i === $image.length - 1) {
      $image[i].className = 'image hidden';
      $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
      i = 0;
      $image[i].className = 'image';
      $circleFocus[i].className = 'fa-solid fa-circle circle-focus';
    }
  }
}

function arrowLeft(event) {
  if (event.target.getAttribute('class') === 'fa-solid fa-angle-left arrow-size') {
    if (i < $image.length) {
      $image[i].className = 'image hidden';
      $image[i - 1].className = 'image';
      $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
      $circleFocus[i - 1].className = 'fa-solid fa-circle circle-focus';
      i--;
    } else if (i === $image.length - 1) {
      $image[i].className = 'image hidden';
      $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
      i = $image.length - 1;
      $image[i].className = 'image';
      $circleFocus[i].className = 'fa-solid fa-circle circle-focus';
    }
  }
}

function circleClick(event) {
  if (event.target.getAttribute('class') === 'fa-regular fa-cicle circle-focus') {
    for (var j = 0; j < $image.length; j++) {
      if (event.target.getAttribute('data-id') === $image[j].getAttribute('data-id')) {
        $image.className = 'image hidden';
        $circleFocus[j].className = 'fa-regular fa-circle circle-focus';
        $image[j].className = 'image';
        $circleFocus[j].className = 'fa-solid fa-circle circle-focus';
      }
    }
  }
}

setInterval(timer, 3000);
function timer() {
  if (i < $image.length - 1) {
    $image[i].className = 'image hidden';
    $image[i + 1].className = 'image';
    $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
    $circleFocus[i + 1].className = 'fa-solid fa-circle circle-focus';
    i++;
  } else if (i === $image.length - 1) {
    $image[i].className = 'image hidden';
    $circleFocus[i].className = 'fa-regular fa-circle circle-focus';
    i = 0;
    $image[i].className = 'image';
    $circleFocus[i].className = 'fa-solid fa-circle circle-focus';
  }
}
