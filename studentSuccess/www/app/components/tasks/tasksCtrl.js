angular.module('studentSuccess').controller('tasksCtrl', function($scope, taskService, $ionicListDelegate) {

$scope.listCanSwipe = true;
$scope.switchReorder = function(){
  $scope.showReorder = !$scope.showReorder;
}

$scope.tasks = taskService.getTasks();

//   $scope.getTask = function() {
//       taskService.getTasks().then(function(response) {
//           $scope.tasks = response;
//       });
//   };
//
// $scope.getTask();

$scope.addTask = function(task) {

  console.log("TASK HIT", task);
    // taskService.addTask(task).then(function(response) {
        $scope.task = {};
        // $scope.getTask();
    // });

};

$scope.selectTask = function(task) {
  console.log("HIT THE TASK")
  $scope.selectedTask = task;
  console.log(task);
}

$scope.updateTask= function(task){
  console.log(task);
  taskService.updateTask(task).then(function(response) {
    $scope.getTask();
  });
};

$scope.hideOptionButtons = function(){
  $ionicListDelegate.closeOptionButtons();
}

})
