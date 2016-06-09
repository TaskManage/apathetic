angular.module('studentSuccess').controller('notebookCtrl', function($scope, notebookService, $state, $ionicHistory, $timeout, $ionicPopup) {

$ionicHistory.clearCache();

$scope.getOrderedClasses = function(){
  notebookService.getOrderedClasses().then(function(response){
    $scope.orderedNotes = response;
    // console.log($scope.orderedNotes);
  })
}

$scope.getOrderedClasses();

$scope.removeNote = function(id){
  console.log('hit from fired remove note')
    notebookService.removeNote(id).then(function(response){
      console.log("update from delete return");
      $scope.getOrderedClasses();
    })
}

// $scope.readAllNotes = function(){
//   console.log("hit from readAllNotes");
//   notebookService.readAllNotes().then(function(response){
//     console.log("here is my response, ", response)
//     $scope.notes = response;
//   })
//  }

// $scope.readAllNotes();


// $scope.selection=[];
//
//   $scope.toggleSelection = function toggleSelection(employeeName) {
//      var idx = $scope.selection.indexOf(employeeName);
//  
//      if (idx > -1) {
//        $scope.selection.splice(idx, 1);
//      }
//  
//      else {
//        $scope.selection.push(employeeName);
//      }
//    };

// $scope.removeNotes = function(){
//   console.log('hit from fired remove note notebookCtrl')
//     notebookService.removeNotes($scope.selection).then(function(response){
//       console.log("update from delete return");
//       $scope.readAllNotes();
//     })
// };

$scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.show({
     title: 'Please Confirm',
     template: 'Are you sure you want to delete this note?',
     buttons: [
       {
         text: '<b>Cancel</b>',
         type: 'button-calm',
       },
       {
         text: '<b>Delete</b>',
         type:'button-assertive',
         onTap: function() {
           $scope.removeNote(note._id);
         }
       }
     ]
   });
   confirmPopup.then(function(res) {
     if(res) {
       $scope.removeNote(note._id);
     } else {
       console.log("");
     }
   });
 };


$scope.showPopup = function() {
  console.log("POPUP HIT");
  var myPopup = $ionicPopup.show({
    title: 'Note Saved',
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




//   $scope.readUserNote = function(){
//     storyService.readUserStory($scope.user).then(function(response){
//       console.log("hit from userList readUserStory");
//       $scope.story = response;
//     })
//   };
//
//   $scope.readUserStory();
// })
