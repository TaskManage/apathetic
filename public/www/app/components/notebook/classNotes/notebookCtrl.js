angular.module('studentSuccess').controller('notebookCtrl', function($scope, notebookService) {

$scope.readAllNotes = function(){
  console.log("hit from readAllNotes");
  notebookService.readAllNotes().then(function(response){
    console.log("here is my response, ", response)
    $scope.notes = response;
  })
 }

$scope.readAllNotes();

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
