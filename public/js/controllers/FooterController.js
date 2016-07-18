angular.module('App.footerCtrl', [])

.controller('FooterController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.activeLocation = Ideas.location;
  $scope.message = 'Current zipcode:'
}]);
