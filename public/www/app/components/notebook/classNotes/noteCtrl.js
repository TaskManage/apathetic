angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService, $ionicPopup, $timeout) {

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


  $scope.filterCondition={
        operator: 'eq'
    }

    $scope.operators = [
        {value: 'eq', displayName: 'equals', title: 'The equals operator does blah, blah'},
        {value: 'neq', displayName: 'not equal', title: 'The not equals operator does yada yada'},
        {value: 'ner', displayName: "don't care", title: "I'm not sure why this isn't working . . . "}
     ]
});
