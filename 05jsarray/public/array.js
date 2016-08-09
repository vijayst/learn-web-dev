var array = [1, 2, 3, 4, 5];
var min = _.min(array);
document.write('minimum is ', min, '<br />');
var max = _.max(array);
document.write('maximum is ', max, '<br />');

document.write('<p />');
document.write('each using underscore', '<br />');
_.each(array, function(item) {
  document.write(item, '<br />');
});

document.write('<p />');
var third = _.find(array, function(item) {
  return item === 3;
});
document.write('third element is ', third, '<br />');

document.write('<p />');
var greaterThan3 = _.filter(array, function(item) {
  return item > 3;
});
document.write('greater than 3 is ', greaterThan3, '<br />');

document.write('<p />');
var square = _.map(array, function(item) {
  return item * item;
});
document.write('square is ', square, '<br />');

document.write('<p />');
var sum = _.reduce(array, function(item, next) {
  return item + next;
}, 0);
document.write('sum is ', sum, '<br />');
