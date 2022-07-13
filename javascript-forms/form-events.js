function handleFocus(event) {
  console.log('focus was fired');
  console.log(event.target.name);

}
document.querySelector('#user-name');
var $idUser = document.querySelector('#user-name');
$idUser.addEventListener('focus', handleFocus);
$idUser.addEventListener('focus', handleBlur);
$idUser.addEventListener('focus', handleInput);

function handleBlur(event) {
  console.log('blur was fired');
  console.log(event.target.name);

}
var $idEmail = document.querySelector('#user-email');
$idEmail.addEventListener('blur', handleFocus);
$idEmail.addEventListener('blur', handleBlur);
$idEmail.addEventListener('blur', handleInput);

function handleInput(event) {
  console.log('input was fired');
  console.log(event.target.name);

}
var $idUserMessage = document.querySelector('#user-message');
$idUserMessage.addEventListener('input', handleFocus);
$idUserMessage.addEventListener('input', handleBlur);
$idUserMessage.addEventListener('input', handleInput);

//
