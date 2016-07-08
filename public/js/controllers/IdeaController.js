angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.idea = "Get Spontaneous";
  $scope.moreInfo = false;
}])
