angular.module('studentSuccess').controller('editCalendarCtrl', function($scope, calendarService, event, $ionicHistory, $state){

	$ionicHistory.clearCache();
	$scope.selectedEvent = event;
	$scope.selectedEvent.start = new Date($scope.selectedEvent.start);
	$scope.selectedEvent.end = new Date($scope.selectedEvent.end);
	// console.log(event)

	$scope.getEventId = function(event) {
		calendarService.getEventId(event).then(function(res) {
			res.dueDate = new Date(res.dueDate);
			$scope.events = res;
			console.log('Response' + res);
		});
	};

	$scope.editEvent = function(selectedEvent) {
		calendarService.editEvent(selectedEvent).then(function(selectedEvent) {
			console.log(selectedEvent + "Event has been edited");
			$state.go("tabsController.calendar_tab2", {reload: true});
		});
	};
	// $scope.getEventId();

});