var request = require('request');

var wikiSummary = function(search, callback) {
  search = encodeURI(search); //handle escaped characters
  request('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&limit=1&format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      results = body;
      callback(body);
    } else {
      console.log(error);
    }
  });
}

module.exports = {
  wikiSearch: wikiSummary
}
