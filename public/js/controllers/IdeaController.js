angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.idea = "Get Spontaneous"
  // $scope.getIdea = function() {
  //   Suggestions.getIdea()
  //   .then(function(idea) {
  //     $scope.idea = idea;
  //   });
  // }

}])
