angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      $scope.getIdea = function() {
        Ideas.getIdea($scope.filter)
        .then(function(idea) {
          $scope.idea = idea.data;
          if (typeof idea.data == 'object') {
            document.querySelector('.centerMessage').classList.add('selectable');
            document.querySelector('.centerMessage').classList.remove('unselectable');
            $scope.moreInfo = true;
          }
          else {
            document.querySelector('.centerMessage').classList.add('unselectable');
            document.querySelector('.centerMessage').classList.remove('selectable');
          }
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
      var menu = document.getElementById('filterMenu');
      menu.addEventListener('change', function(e) {
        $scope.filter = e.target.value;
      })
    }
  }

}])
