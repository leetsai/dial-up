angular.module('App.listCtrl', [])

.controller('ListController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.data = {};
  $scope.data.events = [
    {
      name: 'Mountain biking',
      cost: '$',
      distance: '5.4 mi'
    }
  ]

}])
