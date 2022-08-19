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
  circlecycle();
}

function leftClick() {
  value--;
  if (value < 0) {
    value = 4;
  }
  circlecycle();
}

function circlecycle() {
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

var circleRow = document.querySelector('.circle-row');
var circleFocus = document.querySelector('.circle-focus');
circleRow.addEventListener('click', circleClick);

function circleClick(event) {
  var id = Number(event.target.getAttribute('id'));
  if (circleFocus[id] === event.target) {
    value = id;
    image.setAttribute('src', images[value]);
  }
  clearInterval();
  circleChange();
}

function circleChange() {
  for (var circleChange = 0; circleChange < images.length; circleChange++) {
    circleFocus[circleChange].setAttribute('class', 'fa-solid fa-circle');
    if (value === circleChange) {
      circleFocus[circleChange].setAttribute('class', 'fa-regular fa-circle');
    }
  }
}

// function circleClick(event) {
//   for (var i = 0; i < circle.length; i++) {
//     if (event.target === circle[i]) {
//       circle[i].className = 'fa-solid fa-circle';
//       value = (i + 1);
//     } else {
//       circle[i].className = 'fa-regular fa-circle';
//     }
//   }

//   if (event.target.matches('.circle-focus') === false) {
//     return;
//   }
//   for (var i = 0; i < images.length; i++) {
//     if (event.target.getAttribute('id') === image[i].getAttribute('id')) {
//       images[i].className = '';
//       circleFocus[i].className = 'fa-solid fa-circle';
//       value = parseInt(event.target.getAttribute('id'));
//     } else {
//       circleFocus[i].className = 'fa-regular fa-circle';
//     }
//   }
// }
