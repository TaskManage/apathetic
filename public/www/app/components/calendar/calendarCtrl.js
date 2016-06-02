angular.module('studentSuccess').controller('calendarCtrl', function($scope, calendarService, uiCalendarConfig, $compile, $timeout) {

	var events = [];	

	$scope.getEvent = function() {
		calendarService.getEvent().then(function(res) {
			var event = res.data;
			for (var i = 0; i < event.length; i++) {
				events.push(event[i]);
				// console.log(event[i]);
			}
			
		});
	};

	$scope.getEvent();

	$scope.createEvent = function(calEvent) {
		calendarService.createEvent(calEvent).then(function(calEvent) {
			console.log(calEvent + 'Event created');
		});
	};

	$scope.deleteEvent = function(calId) {
		calendarService.deleteEvent(calId).then(function(calId) {
			console.log(calId + 'Event Deleted');
		});
	};

	$scope.editEvent = function(edCalEvent, calId) {
		calendarService.createEvent(edCalEvent, calId).then(function(edCalEvent, calId) {
			console.log(edCalEvent + "Event has been edited");
			console.log(calId);
		});
	};

	$scope.editId = function(id) {
		console.log(id);
		$scope.editid = id;
	};
	// $scope.createEvent = function() {
	// 	calendarService.createEvent().then(function() {
	// 		console.log('Event Created');
	// 	});
	// };

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

	// $scope.eventSources = [events];

	// 	$scope.calOptions = {
	// 		editable: true,
	// 		header: {
	// 			left: 'prev',
	// 			center: 'title',
	// 			right: 'next',
	// 		},
	// 		eventClick: $scope.alertOnEventClick,
 //       	 	eventDrop: $scope.alertOnDrop,
 //        	eventResize: $scope.alertOnResize,
 //        	eventRender: $scope.eventRender

	// 	};

	// 	$scope.changeView = function(view) {
 //      		uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
 //   		};


	// 	$scope.alertOnEventClick = function( date, jsEvent, view){
 //        	console.log('asdfasdfas');

 //        $scope.dayClick = function ( date, allDay, jsEvent, view) {
 //        	$scope.$apply(function() {
 //        		$scope.alertMessage = ('Day Clicked');
 //        	});
 //        };
 //    };

 	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

   
   
    
    /* event source that contains custom events on the scope */
    // $scope.events = [
    //   {title: 'All Day Event',start: new Date(y, m, 1)},
    //   {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    //   {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    //   {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}
    // ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    // $scope.calEventsExt = {
    //    color: '#f00',
    //    textColor: 'yellow',
    //    events: [
    //       {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    //     ]
    // };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + " " + date.location + ' ' + date.notes);
        console.log('Event Clicked' + date._id);
        $scope.id = date._id;
    };
    $scope.dayClick = function (date, allDay, jsEvent, view) {
      console.log('Day Clicked');
        $scope.alertMessage = ('Day Clicked and stuffs');
    };
    /* alert on Drop */
    //  $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
    //    $scope.alertMessage = ('Event Dropped to make dayDelta ' + delta);
    // };
    /* alert on Resize */
    // $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
    //    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    // };
    /* add and removes an event source of choice */
    // $scope.addRemoveEventSource = function(sources,source) {
    //   var canAdd = 0;
    //   angular.forEach(sources,function(value, key){
    //     if(sources[key] === source){
    //       sources.splice(key,1);
    //       canAdd = 1;
    //     }
    //   });
    //   if(canAdd === 0){
    //     sources.push(source);
    //   }
    // };
    /* add custom event*/
    // $scope.addEvent = function() {
    //   $scope.events.push({
    //     title: 'Open Sesame',
    //     start: new Date(y, m, 28),
    //     end: new Date(y, m, 29),
    //     className: ['openSesame']
    //   });
    // };
    /* remove event */
    // $scope.remove = function(index) {
    //   $scope.events.splice(index,1);
    // };
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
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
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
