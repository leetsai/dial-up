angular.module('App.filterCtrl', [])

.controller('FilterController', ['$scope', function($scope) {
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
      $('.menu').text('☰ Close');
      $('.list').slideDown(200);

    } else {
      toggle = true;
      $('.menu').text('☰ Menu');
      $('.list').slideUp(200);
    }
  }
  // $scope.hideSidebar = hideSidebar();
}]);
