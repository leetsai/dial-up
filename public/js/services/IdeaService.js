angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {

  var getIdea = function() {
    return $http({
      method: 'GET',
      url: '/'
    })
    .then(function(resp) {
      return {idea:'Placeholder'};
    })
  }
  return {
    getIdea: getIdea
  }
}])
