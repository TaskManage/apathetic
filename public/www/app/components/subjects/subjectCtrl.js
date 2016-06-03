angular.module('studentSuccess').controller('subjectCtrl', function($scope, subjectService, $ionicListDelegate, $state, $ionicHistory) {

$ionicHistory.clearCache();

$scope.listCanSwipe = true;

$scope.selectSubject = function(subject){
  console.log('select subject hit', subject);
  $scope.selectedSubject = subject;
};

$scope.getSubjects = function() {
  subjectService.getSubjects().then(function(response){
    $scope.subjects = response;
  });
};

$scope.getSubjects();

$scope.hideOptionButtons = function(){
  $ionicListDelegate.closeOptionButtons();
};

});
