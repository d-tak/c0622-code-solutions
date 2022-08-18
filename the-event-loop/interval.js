var currentCount = 3;
const decrement = setInterval(function () {
  if (currentCount >= 0) {
    console.log('Current Count', currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(decrement);
  }
}, 1000);

// using arrow function
// const decrement = setInterval(() => {
