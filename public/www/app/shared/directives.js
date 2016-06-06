angular.module('studentSuccess')
  .directive('hamburgerMenu', function(authService, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: './app/components/hamburger/hamburger.html',
      controller: function($scope, authService, $state, $ionicPopup, $timeout) {
        $scope.$state = $state;

        $scope.logout = function() {
            localStorage.removeItem('loginToken')
            $state.go('login');
        };

        $scope.update = function(id, user) {
          authService.editUser(id, user).then(function(response) {
            $state.go("tabsController.dashboard");
          })
        }

        $scope.showPopup = function() {
          var myPopup = $ionicPopup.show({
            title: 'Profile Saved',
            template: '<ion-spinner icon="lines" style="margin-left:calc(50% - 14px)"></ion-spinner>',
            scope: $scope,
          });
          myPopup.then(function(res) {
            $state.includes('login');
          });
          $timeout(function() {
             myPopup.close();
          }, 1000);
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
            scope.user.password = '';
        })
      }

      $rootScope.$watch('tokenChange', function(ov, nv){

        getInfo();
      })

      },

    }
  });
