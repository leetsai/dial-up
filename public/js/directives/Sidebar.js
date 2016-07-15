angular.module('App.sidebar', [])

.directive('sidepanel', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/sidebar.html',
  }
}])
