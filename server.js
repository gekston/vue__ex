var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style.js', function (req, res) {
  res.sendFile(path.join(__dirname+'/style.js'));
});

app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/');
});
