angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.idea = "Need an idea?";
  $scope.filter = document.getElementById('filterMenu').value;
  $scope.moreInfo = false;
  $scope.sideBtns = false;
  $scope.eventList = false;
  $scope.button = "Get one";
}])
