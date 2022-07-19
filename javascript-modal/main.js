var $openModal = document.querySelector('.open-modal');
var overlay = document.querySelector('.overlay');
var $response = document.querySelector('.response');

function openModal(event) {
  overlay.className = 'overlay';
}
function response(event) {
  overlay.className = 'overlay hidden';
}

$openModal.addEventListener('click', openModal);
$response.addEventListener('click', response);
