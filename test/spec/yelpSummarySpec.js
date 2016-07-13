//test suite for yelp API:
var chai = require('chai');
var expect = chai.expect;
var Yelp = require('../../server/externalAPIs/yelp.js');

describe('Yelp Testing Suite', function() {
  it('should be a function', function() {
    expect(Yelp.yelpSearch).to.be.a('function');
  });


  it('should return an array', function() {
    Yelp.yelpSearch('food', 'San Francisco', 1, function(data) {
      expect(data).to.be.a('array');
    });  
  });

  it('array should contains objects', function() {
    Yelp.yelpSearch('food', 'San Francisco', 1, function(data) {
      expect(data[0]).to.be.a('object');
    });
  });

  it('should have properties..', function() {
    Yelp.yelpSearch('food', 'San Francisco', 1, function(data) {
      expect(data[0]).to.have.any.keys('business', 'reviews', 'reviews_count', 'phone', 'rating', 'rating_image', 'image_url', 'yelp_url');
    });
  });

});
