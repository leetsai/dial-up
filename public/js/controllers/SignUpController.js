angular.module('App.signUpCtrl', [])

.controller('signUpController', ['$scope', 'SignUp', '$state', function($scope, SignUp, $state) {
  $scope.username = '';
  $scope.email = '';

  //if submit button is clicked send credentials to
  $scope.getCredentials = function(email) {
    console.log('SignupCtrl accessed: submitting: ', email);
    SignUp.submitSignUp(email);
    $state.go('home');
  };
}]);
