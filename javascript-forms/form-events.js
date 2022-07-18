function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}
var userName = document.querySelector('#user-name');
userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}
var userEmail = document.querySelector('#user-email');
userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}
var userMessage = document.querySelector('#user-message');
userMessage.addEventListener('focus', handleFocus);
userMessage.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);
