// var Yelp = require('yelp');
// var env = require('dotenv').config();
//
// var yelp = new Yelp({
//   consumer_key: process.env['CONSUMER_KEY'],
//   consumer_secret: process.env['CONSUMER_SECRET'],
//   token: process.env['TOKEN'],
//   token_secret: process.env['TOKEN_SECRET']
// });
//
// var yelpSearch = function(search, location, cb) {
//   yelp.search({term:search, location: location})
//     .then(function(data) {
//       cb(data);
//       console.log(data);
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
//   };
//
// // yelp.business('yelp-san-francisco')
// //   .then(console.log)
// //   .catch(console.error);
// //
// // yelp.phoneSearch({phone: '+12223334444'})
// //   .then(console.log)
// //   .catch(console.error);
//
// module.exports = {
//   yelpSearch: yelpSearch,
//   yelpKeys: yelp
// }
