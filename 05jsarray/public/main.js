var obj = {
  id: 1,
  name: 'Vijay'
};
document.write(JSON.stringify(obj), '<br />');

var extendedObject = _.extend({}, obj, { age: 25 });
document.write(JSON.stringify(extendedObject), '<br />');

var keys = _.keys(obj);
document.write('keys are ', keys, '<br />');

var values = _.values(obj);
document.write('values are ', values, '<br />');

_.mapObject(obj, function(value, key) {
  document.write(key, ':', value, '<br />');
});
