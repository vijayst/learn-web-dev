var array = [1, 2, 3, 4, 5];
document.write('original array: ', array, '<br />');

array.push(6);
document.write('array after push: ',array, '<br />');

var last = array.pop();
document.write('array after pop: ',array,  '<br />');
document.write('last: ', last,  '<br />');

var first = array.shift();
document.write('array after shift: ', array,  '<br />');
document.write('first: ', first, '<br />')

array.unshift(0);
document.write('array after unshift: ', array,  '<br />');

var subarray = array.slice();
document.write('sliced array: ', subarray,  '<br />');
document.write(array === subarray,  '<br />');

array.splice(0, 2);
document.write('splicing first two elements off array: ', array,  '<br />');

array.splice(1, 0, 10, 20, 30);
document.write('splicing three new elements into array: ', array,  '<br />');
