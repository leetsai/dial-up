angular.module('App.eventList', [])

.directive('eventList', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/list.html',
  }
}])
