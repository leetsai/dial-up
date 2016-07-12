//test suite for wikipedia:
var wikipedia = require('../../server/externalAPIs/wikipedia.js');
var chai = require('chai');
var expect = chai.expect;

describe('wikipedia', function() {
  it('should be a function', function() {
    expect(wikipedia.wikiSearch).to.be.a('function');
  });

  it('should generate an object.', function() {
    var wikiData;
    wikipedia.wikiSearch('Basketball', function(data) {
      wikiData = data;
      expect(wikiData).to.be.a('object');
    });
  });

  it('should have: searchTerm, description, and link properties.', function() {
    wikipedia.wikiSearch('Basketball', function(data) {
      expect(data).to.have.any.keys('searchTerm', 'description', 'link');
    });
  });

  it('values should be string', function() {
    wikipedia.wikiSearch('Basketball', function(data) {
      for (var key in data) {
        expect(data[key]).to.be.a('string');
      }
    });
  });

  // it('should encode argument & integrate into url.', function() {
  //   wikipedia.wikiSearch('Basketball', function(data) {
  //     expect(data).to.be.a('string');
  //   });
  // });

})