var express = require('express');
var server = require('../server.js')
var fs = require('fs');

var app = server.app;

// First pass at internal API
// app.get('/', function(req, res) {
//   res.sendFile('/index.html')
// })

app.get('api/getIdea', function(req, res, next) {
  var category = req.body.category;
  req.send('Hello Front End');

});


// Helper Functions


var getIdeaList = function() {

  fs.readFile(__dirname + '/data.json', 'UTF-8', function(err, data) {
    if (err) {
      console.log('Get Idea Threw Error: ', err);
    }
    var ideaList = JSON.parse(data);
    return JSON.parse(data);
  })
};

var generateRandomIdea = function (object, category) {
  var len = object[category].length;
  var random = Math.floor(Math.random() * len);
  return object[category][random];
};





