angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService, $ionicPopup, $timeout, subjectService) {

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
