angular.module('studentSuccess')
  .directive('hamburgerMenu', function(authService, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: './app/components/hamburger/hamburger.html',
      controller: function($scope, authService, $state) {
        $scope.$state = $state;

        $scope.logout = function() {
            localStorage.removeItem('loginToken')
            $state.go('login');
        };
      },
      link: function(scope, elem, att){
        $rootScope.tokenChange = false;
        if(JSON.parse(localStorage.getItem('loginToken'))){
        getInfo();
        }
        function getInfo(){
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            scope.user = response.data.user;
        })
      }

      $rootScope.$watch('tokenChange', function(ov, nv){
        console.log('updating directive');
        $rootScope.tokenChange = false;
        getInfo();
      })

      },

    }
  });
