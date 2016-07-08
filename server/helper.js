var express = require('express');
var server = require('../server.js')
var fs = require('fs');

var getIdeaList = function() {

  fs.readFile(__dirname + '/data.json', 'UTF-8', function(err, data) {
    if (err) {
      console.log('Get Idea Threw Error: ', err);
    }
    var ideaList = JSON.parse(data);
    return ideaList;
  })
};

var generateRandomIdea = function (object, category) {
  var len = object[category].length;
  var random = Math.floor(Math.random() * len);
  return object[category][random];
};

module.exports = {
  getIdeaList: getIdeaList,
  generateRandomIdea: generateRandomIdea
}