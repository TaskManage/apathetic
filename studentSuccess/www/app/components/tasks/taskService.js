angular.module("studentSuccess").service("taskService", function($http, ipService, $rootScope) {

  var ip = ipService.ip;
  var loginToken = JSON.parse(localStorage.getItem('loginToken'));

  $rootScope.$watch('tokenChange', function(ov, nv){

    loginToken = JSON.parse(localStorage.getItem('loginToken'));
  });

  this.getTasks = function() {
    return $http({
      method: 'GET',
      url: ip + '/tasks'
    }).then(function(response) {
      return response.data;
    });
  };

  this.getUserTasks = function(user) {
    return $http({
      method: 'GET',
      url: ip + '/tasky',
      headers: {
        loginToken: loginToken
      }
    }).then(function(response) {
      return response.data;
    })
  };

  this.getTask = function(id) {
    return $http({
      method: 'GET',
      url: ip + '/tasks/' + id,
      headers: {
        loginToken: loginToken
      }
    }).then(function(response) {
      return response.data;
    });
  };

  this.createTask = function(task) {
    return $http({
      method: 'POST',
      url: ip + '/tasks',
      headers: {
        loginToken: loginToken
      },
      data: task
    }).then(function(response) {
      return response;
    });
  };

  this.updateTask = function(task) {
    return $http({
      method: 'PUT',
      url: ip + "/tasks/" + task._id,
      data: task
    }).then(function(response) {
      return response;
    });
  };

  this.deleteTask = function(task) {
    return $http({
      method: 'DELETE',
      url: ip + '/tasks/' + task._id
    }).then(function(response) {
      return response;
    });
  };
});
