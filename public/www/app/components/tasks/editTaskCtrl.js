angular.module('studentSuccess').controller('editTasksCtrl', function($scope, taskService, task, $ionicHistory, $state, $ionicPopup, $timeout) {

$ionicHistory.clearCache();

$scope.selectedTask = task;

$scope.selectedTask.dueDate = new Date($scope.selectedTask.dueDate);

  $scope.getTask = function(task) {
      taskService.getTask(task).then(function(response) {
        response.dueDate = new Date(response.dueDate);
        console.log(response.dueDate);
          $scope.tasks = response;
      });
  };
// $scope.getTask();

  $scope.updateTask= function(task){
    taskService.updateTask(task).then(function(response) {
      $state.go("tabsController.tasks_tab4", {reload: true});
    });
  };

  $scope.deleteTask= function(task){
    taskService.deleteTask(task).then(function(response) {
      $state.go("tabsController.tasks_tab4", {reload: true});
    });
  };


  $scope.showPopup = function() {
    var myPopup = $ionicPopup.show({
      title: 'Task Saved',
      template: '<ion-spinner icon="lines" style="margin-left:calc(50% - 14px)"></ion-spinner>',
      scope: $scope,
    });
    myPopup.then(function(res) {
    });
    $timeout(function() {
       myPopup.close();
    }, 1000);
   };

});
