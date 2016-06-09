angular.module('studentSuccess').controller('viewNoteCtrl', function($ionicHistory, $scope, notebookService, $state, noteDetail) {
$scope.note = noteDetail;
console.log($scope.note);

$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
  viewData.enableBack = true;
}); 

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

$scope.parsed = noteDetail.message;
console.log($scope.parsed);

$scope.log = $( "#log" ),
  $scope.html = $.parseHTML($scope.parsed),

// Append the parsed HTML
$scope.log.append( $scope.html );

});
