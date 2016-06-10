angular.module('studentSuccess').controller('signupCtrl', function($scope, authService, $state, $rootScope) {

$scope.newUser = {};

  $scope.register = function(user) {
   authService.registerUser(user).then(function(response) {
     if (response.data.loggedIn) {
       console.log(response.data);
       localStorage.setItem('loginToken', JSON.stringify(response.data.loginToken))

         setTimeout(function(){$rootScope.tokenChange = !$rootScope.tokenChange; $state.go("tabsController.dashboard");},500)
        //  $scope.newUser = ''
     } else {
       //error
     }
   });
 };

});
