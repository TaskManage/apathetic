angular.module('studentSuccess').controller('dashboardCtrl', function($scope, user) {
  $scope.user = user.data.user;
  console.log(user);

})
