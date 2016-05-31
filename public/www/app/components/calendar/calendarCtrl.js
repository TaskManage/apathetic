angular.module('studentSuccess').controller('calendarCtrl', function($scope, calendarService) {

	var events = [];	

	$scope.getEvent = function() {
		calendarService.getEvent().then(function(res) {
			var event = res.data;
			for (var i = 0; i < event.length; i++) {
				events.push(event[i]);
				console.log(event[i]);
			}
		});
	};

	$scope.getEvent();

	$scope.createEvent = function() {
		calendarService.createEvent().then(function() {
			console.log('Event Created');
		});
	};

 // 	var date = new Date();
 // 	var d = date.getDate();
 //  	var m = date.getMonth();
 //  	var y = date.getFullYear();

	// var events = [
	// 		{
	// 			title: "Crap", 
	// 			start: new Date(2016, 4, 2, 19, 30), 
	// 			end: new Date(2016, 4, 2, 22, 30), 
	// 			allDay: false
	// 		},
	// 		{
	// 			title: "More Crap", 
	// 			start: new Date(2016, 4, 2, 22, 38), 
	// 			end: new Date(2016, 4, 24)
	// 		},
	// 		{
	// 			title: "Even More Crap",
	// 			start: new Date(2016, 4, 31)
	// 		}
	// 	];

	$scope.eventSources = [events];

		$scope.calOptions = {
			editable: true,
			header: {
				left: 'prev',
				center: 'title',
				right: 'next',
			},
			eventClick: $scope.alertOnEventClick,
       	 	eventDrop: $scope.alertOnDrop,
        	eventResize: $scope.alertOnResize,
        	eventRender: $scope.eventRender

		};

		$scope.alertOnEventClick = function( date, jsEvent, view){
        	console.log('asdfasdfas');

        $scope.dayClick = function ( date, allDay, jsEvent, view) {
        	$scope.$apply(function() {
        		$scope.alertMessage = ('Day Clicked');
        	});
        };
    };

});
