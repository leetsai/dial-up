var express = require('express');
var fs = require('fs');
var path = __dirname + '/public/';

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});

// do other stuff

app.listen(1337, function() {
  console.log('App listening on port 1337!');
});
