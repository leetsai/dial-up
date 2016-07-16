angular.module('App.eventSignUp', [])

.directive('eventSignUp', ['$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/signUp.html',
  }
}])
