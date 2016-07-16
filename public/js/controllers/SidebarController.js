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
  }
  // when ☰ Menu is clicked, showSidebar gets fired; click again and hideSidebar will fire
  // $scope.showSidebar = showSidebar();
  var toggle = true;

  $scope.showSidebar = function() {
    if (toggle) {
      toggle = false;
      $('.menu').text('☰ Close Menu');
      $('.list').slideDown();
      
    } else {
      toggle = true;
      $('.menu').text('☰ Menu');
      $('.list').slideUp();
    }
  }
  // $scope.hideSidebar = hideSidebar();
}]);
