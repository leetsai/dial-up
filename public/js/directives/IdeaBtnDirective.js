angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getIdea = function() {
        Ideas.getIdea()
        .then(function(data) {
          $scope.idea = data.idea;
          $scope.moreInfo = true;
        });
      }
    }
  }

}])
