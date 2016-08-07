var name = 'Vijay';
var age = 23;
var isEmployee = true;
var theObject = {};
var date = new Date();

function printType(obj) {
  document.write(obj, ' is of type ', typeof obj, '<br />');
}

function printClass(obj) {
  document.write(obj, ' belongs to the class ', Object.prototype.toString.call(obj), '<br />');
}

function printArray(arr) {
  var i;
  for(i = 0; i < arr.length; i++) {
    printType(arr[i]);
  }
}

function printSqrt(z) {
  if (!isNaN(z)) {
    document.write(Math.sqrt(z), '<br />');
  }
}

var array = [name, age, isEmployee, theObject, date, undefined, null];
printType(array);
printClass(array);
document.write('<p />');


printArray(array);
document.write('<p />');

var x = 10;
var y = parseInt("10");
if (x === y) {
  document.write("x is equal to y");
} else {
  document.write("x is not equal to y");
}
document.write('<p />');

printSqrt(x);
printSqrt(y);
printSqrt(25);
