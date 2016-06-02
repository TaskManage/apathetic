angular.module('studentSuccess').controller('loginCtrl', function($scope, authService, $state, $rootScope) {

  $scope.login = function(user) {
  authService.login(user).then(function (response) {
    console.log(response.data);
    if (response.data.login) {
      localStorage.setItem('loginToken', JSON.stringify(response.data.loginToken))
         setTimeout(function(){$rootScope.tokenChange = true; $state.go("tabsController.dashboard");},500)
    } else {
      //error
    }

  })
};


});
