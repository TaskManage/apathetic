angular.module('studentSuccess').controller('noteCtrl', function($scope, notebookService) {

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

  $scope.filterCondition={
        operator: 'eq'
    }

    $scope.operators = [
        {value: 'eq', displayName: 'equals', title: 'The equals operator does blah, blah'},
        {value: 'neq', displayName: 'not equal', title: 'The not equals operator does yada yada'},
        {value: 'ner', displayName: "don't care", title: "I'm not sure why this isn't working . . . "}
     ]
});
