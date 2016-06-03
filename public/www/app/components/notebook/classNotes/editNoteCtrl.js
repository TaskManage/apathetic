angular.module('studentSuccess').controller('editNoteCtrl', function($scope, notebookService) {

$scope.message = {
  name: "",
  message: ""
}

  $scope.updateNote = function(){
    console.log("hit from fired edit note")
      notebookService.addNote($scope.message).then(function(response){
        console.log("update from edit return", response);
      // $scope.saveArr.push(response);
      // $scope.storyId = response._id;
      // $scope.storyRes = response;
  })
}
});
