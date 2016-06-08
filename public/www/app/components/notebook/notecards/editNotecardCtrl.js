angular.module('studentSuccess').controller('editNotecardCtrl', function($scope, notecardService, $state, $ionicHistory, $stateParams) {

$ionicHistory.clearCache();

$scope.id = $stateParams.id;

$scope.readNotecards = function(){
  console.log("hello from readNote on edit page. Here is my id", $scope.id)
  notebookService.readNote($scope.id).then(function(response){
    console.log("return from edit readNote", response);
    $scope.selNote = response;
  })
}

$scope.readNotecards();


  $scope.updateNotecard = function(){
    console.log("hit from fired edit note")
      notebookService.updateNote($scope.selNote, $scope.id).then(function(response){
        console.log("update from edit return", response);
      // $scope.saveArr.push(response);
      // $scope.storyId = response._id;
      // $scope.storyRes = response;
  })
}

$scope.removeNotecard = function(){
  console.log('hit from fired remove note')
    notebookService.removeNote($scope.id).then(function(response){
      console.log("update from delete return");
    })

}
});
