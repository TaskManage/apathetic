angular.module('studentSuccess').controller('loginCtrl', function($scope, authService, $state) {

  $scope.login = function(user) {
  authService.login(user).then(function (response) {
    // console.log(response.data);
      $state.go("tabsController.dashboard");
  })
};


});
