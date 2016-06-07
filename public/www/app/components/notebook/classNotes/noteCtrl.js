angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService, subjectService) {


  $scope.getSubjects = function() {
    subjectService.getSubjects().then(function(response){
      $scope.subjects = response;
    });
  };

  $scope.getSubjects();

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
