angular.module('App.listCtrl', [])

.controller('ListController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.data = Ideas.currentIdea();
  console.log($scope.data)
}])
