angular.module('App.listCtrl', [])

// Not working at the moment - switching over to list directive to stay on same page
.controller('ListController', ['$scope', 'Ideas', function($scope, Ideas) {
<<<<<<< 75f58f5036338ea180d6c2ca84c01192e1f349f3
  $scope.data = {};
  $scope.idea = Ideas.currentIdea.data;
  $scope.data.events = [{
    name: 'Mountain Biking',
    cost: '$$',
    description: 'Biking, on a mountain'
  }]
  console.log($scope.data)

=======
  $scope.data = Ideas.currentIdea();
  console.log($scope.data);
>>>>>>> [Feature] Comverting yelpSearch into a function
}])
