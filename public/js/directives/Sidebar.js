angular.module('App.sidebar', [])

.directive('sidepanel', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'views/sidebar.html',
  };
}]);
