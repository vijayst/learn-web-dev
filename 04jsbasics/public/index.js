/*
Types
type conversion
if operator
for operator
declaring array, object, date
switch statement
*/


document.write('Data types', '<br />');
var array = ['Vijay', 5, new Date(), function a() {}, null, undefined, NaN, true];
for(item of array) {
  document.write(item, ' is ', typeof item, '<br />');
}

document.write('<p />')
document.write('Checking the Object class {Array} ', '<br />');
if (array.constructor === Array) {
  document.write('it is an array', '<br />');
}

if (Object.prototype.toString.call(array) === '[object Array]') {
  document.write('it is an array', '<br />');
}

document.write('<p />');
document.write('Testing for null', '<br />');
var a = null;
if ((typeof a !== 'undefined') && (a !== null)) {
  document.write('a is not null');
} else {
  document.write('a is null');
}

document.write('<p />');
document.write('Defining function', '<br />');
function loop(n) {
  var i = 0,
  total = 0;
  for(i = 1; i <= n; i++) {
    total += i;
  }
  document.write('Sum of ', n, ' numbers is ', total, '<br />');
}
loop(10);
loop(1);
loop(100);

document.write('<p />');
document.write('Switch statements', '<br />');
var color;
switch(color) {
  case 'red':
  document.write('color is red');
  break;
  case 'green':
  document.write('color is green');
  break;
  case 'yellow':
  document.write('color is yellow');
  break;
  default:
  document.write('color is unknown');
  break;
}
