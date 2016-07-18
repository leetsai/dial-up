angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {
  // Storage for idea - need more for API data
  var currentIdea = {
    data: null
  };
  var queryData = {
    location: null,
    count: 5
  }
  var getYelp = function(suggestion) { // include location, resultCount
    return $http({
      method: 'POST',
      url: '/api/yelpDetails',
      data: {
        suggestion: suggestion,
        location: queryData.location || 'San Francisco',
        resultCount: queryData.count || 5
      }
    })
    .then(function(resp) {
      return resp;
    });
  };

  var getWiki = function(suggestion) {
    return $http({
      method: 'POST',
      url: '/api/wikiDetails',
      data: {suggestion: suggestion}
    })
    .then(function(resp) {
      return resp;
    });
  };

  return {
    queryData: queryData,
    currentIdea: currentIdea,
    // getIdea: getIdea,
    getYelp: getYelp,
    getWiki: getWiki
  };
}]);
