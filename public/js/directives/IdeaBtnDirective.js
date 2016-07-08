angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getIdea = function() {
        Ideas.getIdea($scope.filter)
        .then(function(data) {
          $scope.idea = data.idea;
          $scope.moreInfo = true;
          $scope.sideBtns = true;
          $scope.button = "Next"
        });
      }
      $scope.getList = function() {
        if ($scope.moreInfo) {
          $state.go('list', {id:$scope.idea});
        }
      }
      $scope.goBack = function() {
        $state.go('home');
      }
    }
  }

}])
