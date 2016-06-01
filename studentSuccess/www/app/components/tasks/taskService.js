angular.module("studentSuccess").service("taskService", function($http) {

  // var dummyTask = {
  //   id: "12345",
  //   creator: "Jane Snow",
  //   createdAt: Date.now,
  //   title: "Buy Milk at store",
  //   priority: 1,
  //   reminder: 4,
  //   allDay: false,
  //   subject: "Personal",
  //   dueDate: new Date(),
  //   notes: "Buy 2% and use the coupon"
  // };

  var dummyTask = [
    {
      title: "Buy Milk",
      dueDate: "May 5th"
    },
    {
      title: "Deposit Check",
      dueDate: "May 6th"
    }
  ];

  this.getTasks = function() {
    return dummyTask;
    // return $http({
    //   method: 'GET',
    //   url: '/tasks'
    // }).then(function(response) {
    //   return response;
    // });
  };

  this.getTask = function(id) {
    return $http({
      method: 'GET',
      url: '/tasks?_id=' + id
    }).then(function(response) {
      return response;
    });
  };

  this.createTask = function(tasks) {
    return $http({
      method: 'POST',
      url: '/tasks',
      data: task
    }).then(function(response) {
      return response;
    });
  };

  this.updateTask = function(id, tasks) {
    return $http({
      method: 'PUT',
      url: "/tasks/" + id,
      data: task
    }).then(function(response) {
      return response;
    });
  };

  this.deleteTask = function(id) {
    return $http({
      method: 'DELETE',
      url: '/tasks/' + id
    }).then(function(response) {
      return response;
    });
  };
});
