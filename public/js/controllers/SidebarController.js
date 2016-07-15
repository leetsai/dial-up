angular.module('App.sidebarCtrl', [])

.controller('SidebarController', ['$scope', function($scope) {
  // sidebar menu button
  $scope.sidebarBtn = "☰ Menu";
  // when ☰ Menu is clicked, showSidebar gets fired; click again and hideSidebar will fire
  $scope.showSidebar = showSidebar();
  $scope.hideSidebar = hideSidebar();
}]);
