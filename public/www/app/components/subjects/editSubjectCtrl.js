angular.module('studentSuccess').controller('editSubjectCtrl', function($scope, subjectService, $ionicHistory, $ionicPopup, $state, user, subject, $timeout) {

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

$scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.show({
     title: 'Please Confirm',
     template: 'Are you sure you want to delete this class?',
     buttons: [
       {
         text: '<b>Cancel</b>',
         type: 'button-calm',
       },
       {
         text: '<b>Delete</b>',
         type:'button-assertive',
         onTap: function() {
           $scope.deleteSubject($scope.selectedSubject);
         }
       }
     ]
   });
   confirmPopup.then(function(res) {
     if(res) {
       $scope.deleteSubject($scope.selectedSubject);
     } else {
       console.log("");
     }
   });
 };

 $scope.showPopup = function() {
   var myPopup = $ionicPopup.show({
     title: 'ClassSaved',
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
