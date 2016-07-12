//test suite for wikipedia:
var wikipedia = require('../../server/externalAPIs/wikipedia.js');
var chai = require('chai');
var expect = chai.expect;

describe('wikipedia', function() {
  it('should be a function', function() {
    expect(wikipedia.wikiSearch).to.be.a('function');
  });
})
