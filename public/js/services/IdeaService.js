angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {

  var currentIdea = null;
  var getCurrentIdea = function() {
    return currentIdea;
  }
  var getIdea = function(filter) {
    return $http({
      method: 'POST',
      url:'/api/getIdea',
      data: {category:filter}
    })
    .then(function(resp) {
      currentIdea = resp;
      return resp;
    })
  }
  var getList = function() {
    return $http({
      method: 'GET',
      url: '/api/suggestionDetails'
    })
    .then(function(resp) {
      return resp;
    })
  }
  return {
    currentIdea: getCurrentIdea,
    getIdea: getIdea
  }
}])
