var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
