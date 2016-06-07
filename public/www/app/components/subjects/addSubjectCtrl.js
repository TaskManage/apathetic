angular.module('studentSuccess').controller('addSubjectCtrl', function($scope, subjectService, $ionicHistory, $state) {

$ionicHistory.clearCache();

$scope.now = function(){
  return $scope.now = new Date.now;
}

$scope.getSubjects = function() {
  subjectService.getSubjects().then(function(response){
    $scope.subjects = response;
  });
};

$scope.getSubjects();


$scope.addSubject = function(subject, repeat){
  subjectService.createSubject(subject, repeat).then(function(response, repeat){
  	console.log("repeat " + repeat);
    $scope.getSubjects();
    $state.go("tabsController.subjects", {reload: true});
  })
}

})
