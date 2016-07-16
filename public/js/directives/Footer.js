angular.module('App.footer', [])

.directive('bottomBar', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html'
  };
}]);
