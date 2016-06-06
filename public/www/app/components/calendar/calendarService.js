angular.module('studentSuccess').service('calendarService', function($http, ipService) {

	var ip = ipService.ip;

	this.getEvent = function() {
		return $http ({
			method: 'GET',
			url: ip + '/events'
		});
	};

	this.getEventId = function(id) {
		return $http ({
			method: 'GET',
			url: ip + '/events/' + id
		}).then(function(response) {
			return response.data;
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

	this.editEvent = function(edCalEvent) {
		console.log(edCalEvent);
		return $http ({
			method: 'PUT',
			url: ip + '/events/' + edCalEvent._id,
			data: edCalEvent
		}).then(function(response) {
			return response;
		});
	};

});
