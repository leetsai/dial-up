angular.module('App.sidebar', [])

.directive('sidebarDirective', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'views/sidebar.html',
  };
}]);
