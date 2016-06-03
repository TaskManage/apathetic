angular.module('studentSuccess')

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController', {
    url: '/page1',
    templateUrl: 'app/shared/navTabs/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'app/components/login/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'app/components/signup/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'tab1': {
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.calendar'
      2) Using $state.go programatically:
        $state.go('tabsController.calendar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/calendar
      /page1/tab2/calendar
  */
  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab1': {
        templateUrl: 'app/components/calendar/calendar.html',
        controller: 'calendarCtrl'
      },
      'tab2': {
        templateUrl: 'app/components/calendar/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('tabsController.notebook', {
    url: '/notebook',
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/classNotes/notebook.html',
        controller: 'notebookCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tasks'
      2) Using $state.go programatically:
        $state.go('tabsController.tasks');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/tasks
      /page1/tab4/tasks
  */
  .state('tabsController.tasks', {
    url: '/tasks',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'app/components/tasks/tasks.html',
        controller: 'tasksCtrl'
      },
      'tab4': {
        templateUrl: 'app/components/tasks/tasks.html',
        controller: 'tasksCtrl'
      }
    }
  })

  .state('mainNotebook', {
      url: '/mainNotebook',
      templateUrl: 'app/components/notebook/classNotes/notebook.html',
      controller: 'notebookCtrl'
  })

  .state('note', {
    url: '/newnote',
    templateUrl: 'app/components/notebook/classNotes/note.html',
    controller: 'noteCtrl'
  })

  .state('editNote', {
      url:'/editnote',
      templateUrl: 'app/components/notebook/classNotes/editNote.html',
      controller: 'editNoteCtrl'
  })

  .state('editNotecard', {
    url: '/editNotecard',
    templateUrl: 'app/components/notebook/notecards/editNotecard.html',
    controller: 'notebookCtrl'
  })

  .state('editEvent', {
    url: '/editEvent',
    templateUrl: 'app/components/calendar/editEvent.html',
    controller: 'calendarCtrl',
    resolve: {
      task: function(taskService, $stateParams) {
        return notebookService.getTask($stateParams.id);
      }
    }

  })

  .state('newEvent', {
    url: '/newEvent',
    templateUrl: 'app/components/calendar/newEvent.html',
    controller: 'calendarCtrl'
  })

  .state('editTask', {
    url: '/editTask/:id',
    templateUrl: 'app/components/tasks/editTask.html',
    controller: 'editTasksCtrl',
    cache: false,
    resolve: {
      task: function(taskService, $stateParams) {
        return taskService.getTask($stateParams.id);
      }
    }
  })

  .state('newTask', {
    url: '/newTask',
    cache: false,
    templateUrl: 'app/components/tasks/newTask.html',
    controller: 'tasksCtrl'
  })


  // .state('mathClass', {
  //   url: '/mathclass',
  //   templateUrl: 'templates/mathClass.html',
  //   controller: 'mathClassCtrl'
  // })

  .state('tabsController.classes', {
    url: '/classes',
    views: {
      'tab5': {
        templateUrl: 'app/components/classes/classes.html',
        controller: 'classesCtrl'
      }
    }
  })

  .state('tabsController.addAClass', {
    url: '/addAClass',
    views: {
      'tab5': {
        templateUrl: 'app/components/classes/addAClass.html',
        controller: 'classesCtrl'
      }
    }
  })

  .state('tabsController.classNoteCards', {
    url: '/notecards',
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecards.html',
        controller: 'notecardsCtrl'
      }
    }
  })

  .state('tabsController.notecardStudy1', {
    url: '/notecard1',
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecardStudy1.html',
        controller: 'notecardsCtrl'
      }
    }
  })

  .state('tabsController.notecardStudy2', {
    url: '/notecardStudy2',
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecardStudy2.html',
        controller: 'notecardsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')



});
