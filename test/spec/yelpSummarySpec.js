//test suite for yelp API:
var chai = require('chai');
var expect = chai.expect;
var Yelp = require('../../server/externalAPIs/yelp.js');

var env = require('dotenv').config();

const creds = {
  consumer_key: process.env['CONSUMER_KEY'],
  consumer_secret: process.env['CONSUMER_SECRET'],
  token: process.env['TOKEN'],
  token_secret: process.env['TOKEN_SECRET']
};

const yelp = new Yelp(creds);

describe('Yelp Testing Suite', function() {
  it('should return an array', function() {
    // expect(yelp().to.be.a("array"));
    expect(yelp.search("cake", "taiwan", 10, function(el) {
      return el;
    })).to.be.a('array');
  });
})
