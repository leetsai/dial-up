angular.module('App.ideaService', [])

.factory('Ideas', function($http) {

  var getIdea = $http({
    method: 'GET',
    url: '/'
  })
  .then(function(resp) {
    console.log(resp)
  })

  return {
    getIdea: getIdea
  }
})
