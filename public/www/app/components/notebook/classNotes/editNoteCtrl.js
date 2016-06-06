angular.module('studentSuccess').controller('editNoteCtrl', function($scope, notebookService, $state, $ionicHistory, $stateParams, $timeout, $ionicPopup) {

$ionicHistory.clearCache();

$scope.id = $stateParams.id;

$scope.readNote = function(){
  console.log("hello from readNote on edit page. Here is my id", $scope.id)
  notebookService.readNote($scope.id).then(function(response){
    console.log("return from edit readNote", response);
    $scope.selNote = response;
  })
}

$scope.readNote();


  $scope.updateNote = function(){
    console.log("hit from fired edit note")
      notebookService.updateNote($scope.selNote, $scope.id).then(function(response){
        console.log("update from edit return", response);
      // $scope.saveArr.push(response);
      // $scope.storyId = response._id;
      // $scope.storyRes = response;
  })
}

$scope.removeNote = function(){
  console.log('hit from fired remove note')
    notebookService.removeNote($scope.id).then(function(response){
      console.log("update from delete return");
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
