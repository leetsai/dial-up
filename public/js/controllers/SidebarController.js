angular.module('App.sidebarCtrl', [])

.controller('SidebarController', ['$scope', function($scope) {
  // sidebar menu button
  $scope.sidebarBtn = "☰ Menu";
  $scope.filters = ['Random!',
                    'Little Gifts',
                    'Fun Activities',
                    'Quick Trips',
                    'What to Eat'
                   ];
  $scope.activeFilter = 'Random!';
  $scope.setActive = function(filter) {
    $scope.activeFilter = filter;
  };

  $scope.menuState = true;
  console.log($scope.menuState);
  $scope.toggleMenu = function() {
    console.log('menuState change. Now: ', $scope.menuState);
    $scope.menuState = !$scope.menuState;
  }
  // when ☰ Menu is clicked, showSidebar gets fired; click again and hideSidebar will fire
  // $scope.showSidebar = showSidebar();
  // $scope.hideSidebar = hideSidebar();
}]);
