angular.module('studentSuccess')
	.directive('myCalendar', function() {

		return {
			templateUrl: '/app/components/calendar/day.html',
			controller: 'calendarCtrl'
		};

	});