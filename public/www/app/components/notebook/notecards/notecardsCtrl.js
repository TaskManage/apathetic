angular.module('studentSuccess').controller('notecardsCtrl', function($scope) {

  angular.module('studentSuccess').controller('notebookCtrl', function($scope, notebookService, $state, $ionicHistory) {

  $ionicHistory.clearCache();

  $scope.readAllNotes = function(){
    console.log("hit from readAllNotes");
    notebookService.readAllNotes().then(function(response){
      console.log("here is my response, ", response)
      $scope.notes = response;
    })
   }

  $scope.readAllNotes();


  $scope.selection=[];

    $scope.toggleSelection = function toggleSelection(employeeName) {
       var idx = $scope.selection.indexOf(employeeName);
   
       if (idx > -1) {
         $scope.selection.splice(idx, 1);
       }
   
       else {
         $scope.selection.push(employeeName);
       }
     };

  $scope.removeNotes = function(){
    console.log('hit from fired remove note notebookCtrl')
      notebookService.removeNotes($scope.selection).then(function(response){
        console.log("update from delete return");
        $scope.readAllNotes();
      })
  };

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


})
