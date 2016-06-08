angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService, $ionicPopup, $timeout, subjectService, taskService) {

  $scope.listCanSwipe = true;

$scope.getSubjects = function() {
   console.log("get")
   taskService.getUserTasks().then(function(response) {
     console.log(response);
     $scope.subjects = response.subjects;
   });
 };

$scope.message = {
  message: "",
  subject: "",
  name: ""
}

$scope.getSubjects();

$scope.clearNote = function(){
  $scope.message.message = "";
  $scope.message.subject = "";
  $scope.message.name = "";
}

  $scope.addNote = function(){
    console.log("hit from fired add note", $scope.message)
      notebookService.addNote($scope.message).then(function(response){
        console.log("hit from return", response);
      // $scope.saveArr.push(response);
      // $scope.storyId = response._id;
      // $scope.storyRes = response;
    })
  }

  $scope.showPopup = function() {
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
