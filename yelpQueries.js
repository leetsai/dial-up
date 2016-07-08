var Yelp = require('yelp');

var yelp = new Yelp({
  // Your OAuth consumer key (from Yelp's Manage API Access)
  // The access token obtained (from Yelp's Manage API Access)
})

var yelpSearch = yelp.search({term:'dinner', location: 'San Francisco'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// yelp.business('yelp-san-francisco')
//   .then(console.log)
//   .catch(console.error);
//
// yelp.phoneSearch({phone: '+12223334444'})
//   .then(console.log)
//   .catch(console.error);

module.exports = {
  yelpSearch: yelpSearch
}
