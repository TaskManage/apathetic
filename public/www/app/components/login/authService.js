angular.module("studentSuccess").service("authService", function($http) {

  var ip = 'http://192.168.1.33:3000';

  this.login = function(user) {
    return $http({
      method: 'post',
      url: ip + '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'get',
      url: ip + '/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: ip + '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.registerUser = function(user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: ip + '/users',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: ip + "/user/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };
});
