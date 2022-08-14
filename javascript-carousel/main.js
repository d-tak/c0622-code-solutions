var $arrowRight = document.querySelector('.arrow-right');
var $arrowLeft = document.querySelector('.arrow-left');
var image = document.querySelector('.image');
var images = ['images/001.png', 'images/004.png', 'images/007.png',
  'images/025.png', 'images/039.png'];
var circle = document.querySelectorAll('.circle');
var value = 0;

$arrowRight.addEventListener('click', rightClick);
$arrowLeft.addEventListener('click', leftClick);

function rightClick() {
  value++;
  if (value >= 5) {
    value = 0;
  }
  view();
}

function leftClick() {
  value--;
  if (value < 0) {
    value = 4;
  }
  view();
}

function view() {
  image.src = images[value];
  for (var i = 0; i < images.length; i++) {
    if (i === value) {
      circle[i].className = 'circle fa-solid fa-circle circle-focus';
    } else {
      circle[i].className = 'circle fa-regular fa-circle circle-focus';
    }
  }
}

setInterval(rightClick, 3000);
