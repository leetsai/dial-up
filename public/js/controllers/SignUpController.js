angular.module('App.signUpCtrl', [])
//factory: $http post to sign up
.factory('SignUp', function($http) {
  var submitSignUp = function(username, email) {
    console.log('coming in here!!', username, email)
    return $http({
      method: 'POST',
      url: '/submitForm',
      datatype:'JSON',
      data: {
        "username": username,
        "email":email
      },
      headers: {'Content-Type' : 'application/X-www-form-urlencoded'},
    })
    .then(function(res) {
      return res;
    }, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }

  return {
    submitSignUp: submitSignUp
  };
})
.controller('signUpController', function($scope, SignUp) {
  $scope.username = '';
  $scope.email = '';

  $scope.getCredentials = function(username, email) {
    console.log('this is coming in here', username, email);
    SignUp.submitSignUp(username, email);
  }
});
