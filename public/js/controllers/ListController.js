angular.module('App.listCtrl', [])

// Not working at the moment - switching over to list directive to stay on same page
.controller('ListController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.idea = Ideas.currentIdea.data;
}]);
