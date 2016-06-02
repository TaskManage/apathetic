angular.module('studentSuccess').controller('notebookCtrl', function($scope, notebookService) {

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

//   $scope.readUserNote = function(){
//     storyService.readUserStory($scope.user).then(function(response){
//       console.log("hit from userList readUserStory");
//       $scope.story = response;
//     })
//   };
//
//   $scope.readUserStory();
// })
