function ExampleConstructor() {

}
console.log('value of prototype property: ', ExampleConstructor.prototype);
console.log('typeof prototype property: ', typeof ExampleConstructor);

var newExampleConstructor = new ExampleConstructor();
console.log('new ExampleConstructor: ', newExampleConstructor);

var anInstanceof = newExampleConstructor instanceof ExampleConstructor;
console.log('an instanceof: ', anInstanceof);
