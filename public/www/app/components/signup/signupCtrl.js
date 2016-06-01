angular.module('studentSuccess').controller('signupCtrl', function($scope, authService, $state) {

$scope.newUser = {};

  $scope.register = function(user) {
   authService.registerUser(user).then(function(response) {
     console.log(response.data);
     $state.go("tabsController.dashboard");
   });
 };

});
