angular.module('App.ideaDir', [])

.directive('idea', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getIdea = function() {
        $scope.idea = 'Changed!';
        // Suggestions.getIdea()
        // .then(function(idea) {
        //   $scope.idea = idea;
        // });
      }
    }
  }

})
