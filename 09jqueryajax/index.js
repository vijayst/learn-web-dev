var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./node_modules'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/message', function(req, res) {
  var name = req.query.name;
  res.send({ message: 'Hello ' + name });
});

app.post('/send', function(req, res) {
  console.log(req.body);
  res.send({ message: req.body.message });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
