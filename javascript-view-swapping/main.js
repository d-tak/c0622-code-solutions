var tabContainer = document.querySelector('.tab-container');
var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');

tabContainer.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] === event.target) {
        tab[i].className = 'tab active';
      } else {
        tab[i].className = 'tab';
      }
    }
  }

  var dataView = event.target.getAttribute('data-view');
  for (var k = 0; k < view.length; k++) {
    if (view[k].getAttribute('data-view') === dataView) {
      view[k].className = 'view';
    } else {
      view[k].className = 'view hidden';
    }
  }
}
// loop through '.tab' NodeList.
// compare each element to event.target (tabs.length)
// if element equals Event.target (tab), assign it to a new className
// Make that element .active
// All others --> !active
