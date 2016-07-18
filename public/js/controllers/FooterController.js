angular.module('App.footerCtrl', [])

.controller('FooterController', ['$scope', 'Ideas', function($scope, Ideas) {
  $scope.activeLocation = Ideas.queryData;
  $scope.message = 'Current zipcode:'
}]);
