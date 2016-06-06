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

  $scope.classes = [
    {
      name: "Math Class",
      time: '9am - 10am'
    },
    {
      name: "Biology",
      time: '10am - 11am'
    },
    {
      name: "Music",
      time: '11am - 12pm'
    }
  ];

});
