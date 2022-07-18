var contactForm = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;

  var newObj = {
    name,
    email,
    message
  };

  console.log('newObj: ', newObj);
  document.querySelector('#contact-form').reset();
}

contactForm.addEventListener('submit', submit);
