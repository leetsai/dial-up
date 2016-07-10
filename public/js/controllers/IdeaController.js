angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', function($scope, Ideas) {
  // Default data on page load - changes occur in Buttons directive
  $scope.idea = "Need an idea?";
  $scope.button = "Get one";
  $scope.filter = document.getElementById('filterMenu').value;
  // These 4 dictate whether more information can be shown
  $scope.class = 'noInfo';
  $scope.moreInfo = false;
  $scope.sideBtns = false;
  $scope.eventList = false;
}])
