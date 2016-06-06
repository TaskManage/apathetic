angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService) {

  $scope.message = {
    name: "",
    message: ""
  }

    $scope.addNote = function(){
      console.log("hit from fired add note")
        notebookService.addNote($scope.message).then(function(response){
          console.log("hit from return", response);
        // $scope.saveArr.push(response);
        // $scope.storyId = response._id;
        // $scope.storyRes = response;
    })
  }

});
