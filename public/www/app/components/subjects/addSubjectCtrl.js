angular.module('studentSuccess').controller('addSubjectCtrl', function($scope, subjectService, $ionicHistory, $state) {

$ionicHistory.clearCache();

$scope.now = function(){
  return $scope.now = new Date.now;
}

$scope.getSubjects = function() {
  subjectService.getSubjects().then(function(response){
    $scope.subjects = response.subjects;
  });
};

$scope.getSubjects();


$scope.addSubject = function(subject){
  subjectService.createSubject(subject).then(function(response){
    $scope.getSubjects();
    $state.go("tabsController.subjects", {reload: true});
  })
}

})
