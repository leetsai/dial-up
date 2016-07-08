angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {

  var getIdea = function(filter) {
    return $http({
      method: 'POST',
      url:'/api/getIdea',
      data: {category:filter}
    })
    .then(function(resp) {
      return {idea:'Placeholder'};
    })
  }
  return {
    getIdea: getIdea
  }
}])
