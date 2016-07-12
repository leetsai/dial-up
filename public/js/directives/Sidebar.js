angular.module('App.sidebar', [])

.directive('sideBar', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/sidebar.html'
  }
}])
