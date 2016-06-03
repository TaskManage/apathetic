angular.module('studentSuccess').service('calendarService', function($http, ipService) {

	var ip = ipService.ip;

	this.getEvent = function() {
		return $http ({
			method: 'GET',
			url: ip + '/events'
		});
	};

	this.createEvent = function(calEvent) {
		return $http ({
			method: 'POST',
			url: ip + '/events',
			data: calEvent
		});
	};

	this.deleteEvent = function(calId) {
		return $http ({
			method: 'DELETE',
			url: ip + '/events/' + calId,
		});
	};

	this.editEvent = function(edCalEvent, calId) {
		return $http ({
			method: 'PUT',
			url: ip + '/events/' + calId
		});
	};

});
