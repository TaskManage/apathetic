angular.module("studentSuccess").service("taskService", function($http, ipService) {

var ip = ipService.ip;

  this.getTasks = function() {
    return $http({
      method: 'GET',
      url: ip + '/tasks'
    }).then(function(response) {
      return response.data;
    });
  };

  this.getTask = function(id) {
    return $http({
      method: 'GET',
      url: ip + '/tasks/' + id
    }).then(function(response) {
      return response.data;
    });
  };

  this.createTask = function(task) {
    return $http({
      method: 'POST',
      url: ip + '/tasks',
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
