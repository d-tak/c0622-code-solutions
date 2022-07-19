var lightbulb = true;
var circleOn = document.querySelector('.circle-on');
var circleOff = document.querySelector('.circle-off');
var containerOn = document.querySelector('.container.on');

function toggle(event) {
  if (lightbulb === true) {
    circleOn.className = 'circle-on';
    containerOn.className = 'container on';
    lightbulb = false;
  } else if (lightbulb === false) {
    circleOn.className = 'circle-off';
    containerOn.className = 'container off';
    lightbulb = true;
  }
}
circleOn.addEventListener('click', toggle);
circleOff.addEventListener('click', toggle);
