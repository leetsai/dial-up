angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {
  // Storage for idea - need more for API data
  var currentIdea = {
    data: null
  };
  var getYelp = function(suggestion) { // include location, resultCount
    return $http({
      method: 'POST',
      url: '/api/yelpDetails',
      data: {
        suggestion: suggestion //,
        // location: location,
        // resultCount: resultCount
      }
    })
    .then(function(resp) {
      return resp;
    })
  }

  var getWiki = function(suggestion) {
    return $http({
      method: 'POST',
      url: '/api/wikiDetails',
      data: {suggestion: suggestion}
    })
    .then(function(resp) {
      return resp;
    })
  }

  return {
    currentIdea: currentIdea,
    // getIdea: getIdea,
    getYelp: getYelp,
    getWiki: getWiki
  }
}])
