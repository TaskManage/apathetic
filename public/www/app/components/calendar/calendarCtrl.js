angular.module('studentSuccess').controller('calendarCtrl', function($scope, calendarService, uiCalendarConfig, $compile, $timeout, $ionicHistory, $state) {

	$ionicHistory.clearCache();



	var events = [];	

	$scope.getEvent = function() {
		calendarService.getEvent().then(function(res) {
			// console.log(res.data)
			var event = res.data;
			// console.log(event);
			for (var i = 0; i < event.length; i++) {
				events.push(event[i]);
				// console.log(event[i]);
			}

      $('.fc-day.fc-sat').css('backgroundColor','#bce8f1');
      $('.fc-day.fc-sun').css('backgroundColor','#bce8f1');
			
		});

		$scope.eve = events;
	};

	$scope.getEvent();

	$scope.createEvent = function(calEvent) {
    console.log("Full time event" + calEvent.start);
    console.log("End time" + calEvent.end);
    console.log(calEvent);
		calendarService.createEvent(calEvent).then(function(calEvent) {
			console.log(calEvent + 'Event created');
			$state.go("tabsController.calendar_tab2", {reload: true});
		});
	};

	$scope.deleteEvent = function(calId) {
		calendarService.deleteEvent(calId).then(function(calId) {
			// console.log(calId + 'Event Deleted');
			$state.reload();
		
		});
	};


 	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

   
   
    
    /* Test Data */
    var events = [
      {id: 999,title: 'Test',start: new Date(y, m, d - 1, 16, 0),allDay: false, backgroundColor: 'blue', dow: [1,4]},
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + " " + date.location + ' ' + date.notes);
        // console.log('Event Clicked' + date._id);
        $scope.date = date;
    };
    $scope.dayClick = function (date, allDay, jsEvent, view) {
      console.log('Day Clicked');
        $scope.alertMessage = ('Day Clicked and stuffs');
    };

    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      $timeout(function() {
        if(uiCalendarConfig.calendars[calendar]){
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
      });
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
                      'tooltip-append-to-body': true});
        $compile(element)($scope);
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        // defaultView: 'agendaWeek',
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        dayClick: $scope.dayClick,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };
    
    /* event sources array*/
    $scope.eventSources = [events];
   

});
