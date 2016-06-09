angular.module('studentSuccess').controller('calendarCtrl', function($scope, calendarService, uiCalendarConfig, $compile, $timeout, $ionicHistory, $state, subjectService, $ionicPopup, $ionicListDelegate) {


	$ionicHistory.clearCache();
	$scope.listCanSwipe = true;

  $scope.classSun = "";
  $scope.classMon = "";
  $scope.classTue = "";
  $scope.classWed = "";
  $scope.classThur = "";
  $scope.classFri = "";
  $scope.classSat = "";

   var repeat = [];

      $scope.changeClassSun = function(repeat){
     if ($scope.classSun === "") {
        repeat.push(0);
        console.log(repeat);
        $scope.classSun = "active";
     } else {
       $scope.classSun = "";
     }
   };

    $scope.changeClassMon = function(repeat){
     if ($scope.classMon === "") {
        repeat.push(1);
        console.log(repeat);
        $scope.classMon = "active";
     } else {
       $scope.classMon = "";
     }
   };

    $scope.changeClassTue = function(repeat){
     if ($scope.classTue === "") {
      repeat.push(2);
      console.log(repeat);
       $scope.classTue = "active";
     } else {
       $scope.classTue = "";
     }
   };

     $scope.changeClassWed = function(repeat){
     if ($scope.classWed === "") {
      repeat.push(3);
      console.log(repeat);
      $scope.classWed = "active";
     } else {
       $scope.classWed = "";
     }
   };

     $scope.changeClassThur = function(repeat){
     if ($scope.classThur === "") {
       repeat.push(4);
      console.log(repeat);
     $scope.classThur = "active";
     } else {
       $scope.classThur = "";
     }
   };

     $scope.changeClassFri = function(repeat){
     if ($scope.classFri === "") {
      repeat.push(5);
      console.log(repeat);
     $scope.classFri = "active";
     } else {
       $scope.classFri = "";
     }
   };

     $scope.changeClassSat = function(repeat){
     if ($scope.classSat === "") {
       repeat.push(6);
       console.log(repeat);
      $scope.classSat = "active";
     } else {
       $scope.classSat = "";
     }
   };


  $scope.myVar = false;
  $scope.clicked = function() {
    $scope.myVar = !$scope.myVar;

     
     $scope.repeat = repeat;
     // console.log(repeat);
  };


	var events = [];

	$scope.getEvent = function() {
		calendarService.getEvent().then(function(res) {
			// console.log(res.data)
			var event = res.data;
			// console.log(event);
			for (var i = 0; i < event.length; i++) {
        var momentObjStart = moment(event[i].start);
        var momentObjEnd = moment(event[i].end);
        event[i].start = momentObjStart.format("LLL");
        event[i].end = momentObjEnd.format("LLL");

				events.push(event[i]);
				// console.log("event at i correct" + event[i].title);
			}

      // $('.fc-day.fc-sat').css('backgroundColor','#bce8f1');
      // $('.fc-day.fc-sun').css('backgroundColor','#bce8f1');
			
		});

		$scope.eve = events;
	};

	$scope.getEvent();

  var subject = [];

  $scope.getSubjects = function() {
  subjectService.getSubjects().then(function(response){
     // console.log("getSubjects " , response);
    var sub = response.subjects;
    // console.log("Event length " + event.length);
    for (var i = 0; i < sub.length; i++) {
        var momentObjStart = moment(sub[i].start);
        var momentObjEnd = moment(sub[i].end);
        sub[i].start = momentObjStart.format("LLL");
        sub[i].end = momentObjEnd.format("LLL");
        // event[i].stick = true;
     
        subject.push(sub[i]);
      
    }
    // subject.push({id: 999,title: 'Test',start: new Date( 16, 0),end: new Date( 20, 0),allDay: false, backgroundColor: 'red', dow: [1], stick: true, room: "This is some crap"});
    // subject.push({id: 999,title: 'Repeating Event',start: new Date(y, m, d,  16, 0), stick: true,allDay: false});
    // events.push({id: 999,title: 'Test',start: new Date(y, m, d - 1, 16, 0),allDay: false, backgroundColor: 'orange', dow: [0,1,2,3,4,5,6], stick: true, room: "This is some crap"})
    // console.log("this is the subject array " , subject);
  });
};

$scope.getSubjects();




	$scope.createEvent = function(calEvent, repeat) {
    // console.log("Repeat in createEvent" + repeat);
    // console.log("End time" + calEvent.end);
    // console.log(calEvent);
    if (calEvent.start && calEvent.end) {
      calendarService.createEvent(calEvent, repeat).then(function(calEvent, repeat) {
      $state.go("tabsController.calendar_tab2", {reload: true});
    });
    }
	
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
    // var subject = [
    //   {id: 999,title: 'asdfasdfasdfasdfsd',start: new Date(y, m, d - 1, 16, 0),allDay: false, backgroundColor: 'black', dow: [0,1,2,3,4,5,6], room: "This is some crap", rendering: 'background'},
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

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + " ");
        // console.log('Event Clicked' + date._id);
        $scope.date = date;
    };
    $scope.dayClick = function (date, allDay, jsEvent, view) {
      console.log('Day Clicked');
        $scope.alertMessage = ('Day Clicked and stuffs');
    };

    /* Change View */
    $scope.calMonth = "active";
    $scope.changeView = function(view,calendar) {
      // console.log(view);
      if (view === 'agendaDay') {
        $scope.calDay = "active";
      } else {
        $scope.calDay = "";
      }
       if (view === 'agendaWeek') {
        $scope.calWeek = "active";
      } else {
        $scope.calWeek = "";
      }
       if (view === 'month') {
        $scope.calMonth = "active";
      } else {
        $scope.calMonth = "";
      }
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

    $scope.next = function() {
      console.log("next clicked");
    };

    $scope.uiConfig = {
      calendar:{
        // defaultView: 'agendaWeek',
        editable: true,
        nowIndicator: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        dayClick: $scope.dayClick,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender,
      }
    };

    /* event sources array*/
    $scope.eventSources = [events, subject];

		$scope.hideOptionButtons = function() {
	    $ionicListDelegate.closeOptionButtons();
	  };


		$scope.showPopup = function() {
			var myPopup = $ionicPopup.show({
				title: 'Event Saved',
				template: '<ion-spinner icon="lines" style="margin-left:calc(50% - 14px)"></ion-spinner>',
				scope: $scope,
			});
			myPopup.then(function(res) {
			});
			$timeout(function() {
				 myPopup.close();
			}, 1000);
		 };


});
