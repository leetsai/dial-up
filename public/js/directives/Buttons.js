angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', function(Ideas, $state) {
  return {
    link: function($scope, e, attr) {
      // Gets idea and flags controller for more info to show
      $scope.getIdea = function() {
        Ideas.getIdea($scope.filter)
        .then(function(idea) {
          $scope.idea = idea.data;
          $scope.moreInfo = true;
          $scope.sideBtns = true;
          $scope.eventList = false;
          $scope.changeClass();
          $scope.button = "Next"
        });
      }
      // Gives the Idea display the ability to be clicked
      $scope.changeClass = function() {
        if ($scope.class === "noInfo") {
          $scope.class = "getInfo";
        }
      }
      // Will populate with API data, using dummy data now
      $scope.getList = function(e) {
        if ($scope.moreInfo) {
          $scope.eventList = true;
          // $state.go('list', {id:$scope.idea});
          console.log('Needs to populate list');
        }
      }
      // Allows directive to track filter value that is passed using getIdea()
      var menu = document.getElementById('filterMenu');
      menu.addEventListener('change', function(e) {
        $scope.filter = e.target.value;
      })
    }
  }

}])
