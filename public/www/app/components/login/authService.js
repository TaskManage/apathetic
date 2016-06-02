angular.module("studentSuccess").service("authService", function($http, ipService) {
  
  var ip = ipService.ip;

  var loginToken = JSON.parse(localStorage.getItem('loginToken'));

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: ip + '/login',
      headers: {
        loginToken: loginToken
      },
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: ip + '/logout',
      headers: {
        loginToken: loginToken
      },
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function(token) {
    return $http({
      method: 'GET',
      url: ip + '/me',
      headers: {
        loginToken: token
      },
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
      headers: {
        loginToken: loginToken
      },
      data: user
    }).then(function(response) {
      return response;
    });
  };
});
