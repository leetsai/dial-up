angular.module('App.navbar', [])

.directive('navigation', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html'
  }
}])
