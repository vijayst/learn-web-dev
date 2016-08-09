var array = [1, 2, 3, 4, 5];
array.push(6);
document.write(array, '<br />');

var last = array.pop();
document.write(array,  '<br />');
document.write('last: ', last,  '<br />');

var first = array.shift();
document.write(array,  '<br />');
document.write('first: ', first, '<br />')

array.unshift(0);
document.write(array,  '<br />');

var subarray = array.slice();
document.write(subarray,  '<br />');
document.write(array === subarray,  '<br />');

array.splice(0, 2);
document.write(array,  '<br />');

array.splice(1, 0, 10, 20, 30);
document.write(array,  '<br />');
