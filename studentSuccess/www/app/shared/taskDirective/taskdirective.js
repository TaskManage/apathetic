angular.module('studentSuccess')

.directive("taskList", function(){
  return {
    restrict: "EA",
    scope: {
      task: "=",
    },
    controller: "tasksCtrl",
    link: function(scope, element, attribute){
      scope.selectTask = function(task){
        console.log("HITME!", task);
        scope.selectedTask = task;
      };
    }
  };
});
