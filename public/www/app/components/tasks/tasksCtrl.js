angular.module('studentSuccess').controller('tasksCtrl', function($scope, taskService, $ionicListDelegate, $ionicHistory, $state, user) {
  $scope.user = user.data.user;

  $ionicHistory.clearCache();

  $scope.listCanSwipe = true;
  $scope.switchReorder = function() {
    $scope.showReorder = !$scope.showReorder;
  }

  // $scope.tasks = taskService.getTasks();

  $scope.getTasks = function() {
    console.log("get")
    taskService.getUserTasks().then(function(response) {
      console.log(response);
      $scope.tasks = response.tasks;
    });
  };

  $scope.getTasks();

  $scope.createTask = function(task) {
    taskService.createTask(task).then(function(response) {
      $scope.task = {};
      $scope.getTasks();
      $state.go("tabsController.tasks_tab4", {
        reload: true
      });

    });
  };

  $scope.cancelTask = function(task) {
    $scope.task = {};
  }

  $scope.selectTask = function(task) {
    $scope.selectedTask = task;
  }

  $scope.hideOptionButtons = function() {
    $ionicListDelegate.closeOptionButtons();
  }

  $scope.removeTask = function(task) {
    console.log("REMOVE HIT", task);
    taskService.deleteTask(task).then(function(response) {
      $state.go($state.current, {}, {
        reload: true
      });
    });
  };

  $scope.moveItem = function(task, fromIndex, toIndex) {
    $scope.tasks.splice(fromIndex, 1);
    $scope.tasks.splice(toIndex, 0, task);
  };


  // TESTING REORDER SORTING//
  // $scope.moveItem = function(item, fromIndex, toIndex) {
  //     $scope.items.splice(fromIndex, 1);
  //     $scope.items.splice(toIndex, 0, item);
  //   };
  //
  //   $scope.items = [
  //       { id: 0 },
  //       { id: 1 },
  //       { id: 2 },
  //       { id: 3 },
  //       { id: 4 }
  //     ];

})
