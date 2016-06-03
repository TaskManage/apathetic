angular.module('studentSuccess').controller('editSubjectCtrl', function($scope, subjectService, $ionicHistory, $state, user, subject) {

$scope.user = user.data.user;

$scope.selectedSubject = subject;

$ionicHistory.clearCache();

$scope.findSubject = function(subject) {
  subjectService.findSubject(subject).then(function(response) {
    $scope.subjects = response;
  });
};

$scope.updateSubject= function(subject){
  subjectService.updateSubject(subject).then(function(response) {
    $state.go("tabsController.subjects", {reload: true});
  });
};

$scope.deleteSubject= function(subject){
  subjectService.deleteSubject(subject).then(function(response) {
    $state.go("tabsController.subjects", {reload: true});
  });
};


});
