angular.module('App.listCtrl', [])

// Not working at the moment - switching over to list directive to stay on same page
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
