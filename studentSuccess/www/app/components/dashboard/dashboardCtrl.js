angular.module('studentSuccess').controller('dashboardCtrl', function($scope, user, taskService) {
  $scope.user = user.data.user;

  $scope.getTasks = function() {
    console.log("get")
    taskService.getUserTasks().then(function(response) {
      console.log(response);
      $scope.subjects = response.subjects;
      console.log(response.subjects);
    });
  };

  $scope.getTasks();

});
