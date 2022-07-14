function taskList(event) {
  if (event.type !== 'BUTTON') {
    // what am I looking for?
  // } else ... huh? {

  }

  // var target = event.target;

  console.log(event.target);
  console.log(event.target.tagName);

}
var click = document.querySelector('.task-List');
click.addEventListener('click', taskList);
