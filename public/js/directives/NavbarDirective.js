angular.module('App.navbar', [])

.directive('navigation', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'EA',
    templateUrl: 'views/navbar.html'
  }
}])
