angular.module('studentSuccess').controller('subjectCtrl', function($scope, subjectService, $ionicListDelegate, $state, $ionicHistory, user) {

$scope.user = user.data.user;

$ionicHistory.clearCache();

$scope.listCanSwipe = true;

$scope.selectSubject = function(subject){
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
