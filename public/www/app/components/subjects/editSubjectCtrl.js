angular.module('studentSuccess').controller('editSubjectCtrl', function($scope, subjectService, $ionicHistory, $state, subject) {

  $ionicHistory.clearCache();

  $scope.selectedSubject = subject;

$scope.findSubject = function(subject) {
  subjectService.findSubject(subject).then(function(response) {
    $scope.subject = response;
  });
};

$scope.updateSubject= function(subject){
  subjectService.updateSubject(subject).then(function(response) {
    $state.go("tabsController.subjects", {reload: true});
  });
};


});
