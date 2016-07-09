angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getIdea = function() {
        Ideas.getIdea($scope.filter)
        .then(function(idea) {
          $scope.idea = idea.data;
          $scope.moreInfo = true;
          $scope.sideBtns = true;
          $scope.eventList = false;
          $scope.button = "Next"
        });
      }
      $scope.getList = function() {
        if ($scope.moreInfo) {
          $scope.eventList = true;
          // $state.go('list', {id:$scope.idea});
          console.log('Needs to populate list');
        }
      }
      $scope.goBack = function() {
        $state.go('home');
      }
      var menu = document.getElementById('filterMenu');
      menu.addEventListener('change', function(e) {
        $scope.filter = e.target.value;
      })
    }
  }

}])
