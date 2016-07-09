angular.module('App.listCtrl', [])

.controller('ListController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.data = {};
  $scope.idea = Ideas.currentIdea.data;
  $scope.data.events = [{
    name: 'Mountain Biking',
    cost: '$$',
    description: 'Biking, on a mountain'
  }]
  console.log($scope.data)

}])
