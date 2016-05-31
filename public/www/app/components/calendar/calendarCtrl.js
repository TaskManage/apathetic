angular.module('studentSuccess').controller('calendarCtrl', function($scope) {

	// $scope.test = "crap";

	var events = [
			{
				title: "Crap", 
				start: new Date(2016, 4, 2, 19, 30), 
				end: new Date(2016, 4, 2, 22, 30), 
				allDay: false
			},
			{
				title: "More Crap", 
				start: new Date(2016, 4, 2, 22, 38), 
				end: new Date(2016, 4, 24)
			},
			{
				title: "Even More Crap",
				start: new Date(2016, 4, 31)
			}
		];

	$scope.eventSources = [events];

		$scope.calOptions = {
			editable: true,
			header: {
				left: 'prev',
				center: 'title',
				right: 'next'
			},
			dayClick: function() {
				alert('clicked');
			},
			alertOnEventClick: function() {
				alert(date.title + 'clickedasdf');
			}
			
		};

		// $scope.dayClick = function() {
		// 	console.log('clicked');
		// };

		//  $scope.alertOnEventClick = function( date, jsEvent, view){
  //       $scope.alertMessage = (date.title + ' was clicked ');
  //   };

});
