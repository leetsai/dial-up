angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {

  var currentIdea = null;
  var getCurrentIdea = function() {
    return currentIdea;
  }
  var getIdea = function(filter) {
    return $http({
      method: 'POST',
      url:'api/getIdea',
      data: {category:filter}
    })
    .then(function(resp) {
      currentIdea = resp;
      return resp;
    })
  }
  return {
    currentIdea: getCurrentIdea,
    getIdea: getIdea
  }
}])
