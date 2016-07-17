angular.module('App.sidebar', [])

.directive('sidebarDirective', ['Ideas', '$state', function(Ideas, $state) {
  return {
    restrict: 'E',
    templateUrl: 'views/sidebar.html',
    transclude: true,
    link : function($scope, element, attr) {
      $scope.$watch('menuState', function(newVal) {
            console.log('got into watch')
            if (newVal) {
              element.addClass('hide'); 
              return;
            }
            element.removeClass('hide');
      });
    }
  }
}])