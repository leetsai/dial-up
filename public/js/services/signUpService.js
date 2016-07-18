angular.module('App.signUpService', [])
//factory: $http post to sign up
.factory('SignUp', ['$http', function($http) {
  
  var submitSignUp = function(email) {
    return $http({
      method: 'POST',
      url: '/submitForm',
      data: {
        email: email
      }
    })
    .then(function(res) {
      return res;
    });
  };

  return {
    submitSignUp: submitSignUp
  };

}])