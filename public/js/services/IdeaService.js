angular.module('App.ideaService', [])

.factory('Ideas', ['$http', function($http) {
  // Storage for idea - need more for API data
  var currentIdea = {
    data: null
  };

  var ideaDetails = {
    ideaDescription: null,
    suggestion_title: null,
    suggestion_description: null,
    suggestion_cost: null,
    suggestion_rating: null
  }

  var getIdea = function(filter) {
    return $http({
      method: 'POST',
      url:'/api/getIdea',
      data: {category:filter}
    })
    .then(function(resp) {
      currentIdea.data = resp.data;
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
    currentIdea: currentIdea,
    getIdea: getIdea,
    getList: getList
  }
}])
