/* GOAL:
display different messages depending on the number of clicks made to the '.hot-button'

1. create a way to identify when the button is clicked
    function hotclick(event){
    }

2. log the number of clicks made
    var $clicks = document.querySelector('.click-count');
    $clicks.addEventListener('click', hotClick);

3. increment the clicks count each time a click is made
    (.click-count++)??

4. change the count display to increas with click on the webpage
    (node.textContent?)

5. change color of button based on number of clicks (if statement)
    (if/else)

Every time a button is clicked - do the following:
    Click
      (function)

    signal that an action has taken place
      (addEventListener)

    log that action
      (event - click)

    in the html, update the button class (depending on the count tier)
    (node.textContent)

    With each click, change the click count displayed (increment by 1).
    (count++)

    change the color of the button with each tier change.
    (if/else)

    */

var clicks = 0;

var $button = document.querySelector('.hot-button');
var $count = document.querySelector('.click-count');

$button.addEventListener('click', clickCount); // why?

function clickCount(event) {
  clicks++;

  var color = null; // why? (because this will get updated!!!)

  if (clicks < 4) {
    color = 'cold';
  } else if (clicks < 7) {
    color = 'cool';
  } else if (clicks < 10) {
    color = 'tepid';
  } else if (clicks < 13) {
    color = 'warm';
  } else if (clicks < 16) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }

  $button.className = 'hot-button' + color;
  $count.textContent = 'Clicks: ' + clicks;
}
