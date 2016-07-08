angular.module('App.ideaList', [])

.directive('ideaList', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getList = function() {
        if ($scope.moreInfo) {
          $state.go('list');
        }
      }
    }
  }

}])
