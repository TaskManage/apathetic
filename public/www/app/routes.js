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
    abstract: true,
    cache: false
  })

  .state('login', {
    url: '/login',
    templateUrl: 'app/components/login/login.html',
    controller: 'loginCtrl',
    cache: false
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'app/components/signup/signup.html',
    controller: 'signupCtrl',
    cache: false
  })

  .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'tab1': {
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        cache: false,
        resolve: {
          login: function($state, authService) {
            console.log(JSON.parse(localStorage.getItem('loginToken')))
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
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
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'app/components/calendar/calendar.html',
        controller: 'calendarCtrl',
        cache: false,
        resolve: {
          login: function($state, authService) {
           
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      },
      'tab2': {
        templateUrl: 'app/components/calendar/calendar.html',
        controller: 'calendarCtrl',
        cache: false,
        resolve: {
          login: function($state, authService) {
           
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

  .state('tabsController.notebook', {
    url: '/notebook',
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/classNotes/notebook.html',
        controller: 'notebookCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  console.log(response);
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
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
        controller: 'tasksCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  console.log(response);
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      },
      'tab4': {
        templateUrl: 'app/components/tasks/tasks.html',
        controller: 'tasksCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

  .state('mainNotebook', {
      url: '/mainNotebook',
      templateUrl: 'app/components/notebook/classNotes/notebook.html',
      controller: 'notebookCtrl',
      resolve: {
      login: function($state, authService) {
        console.log(JSON.parse(localStorage.getItem('loginToken')))
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
              console.log(response);
            if (response.data.loggedIn) {

            } else {
              $state.go('login');
            }
          })
        }
      },
  }
})

  .state('note', {
    url: '/newnote',
    cache: false,
    templateUrl: 'app/components/notebook/classNotes/note.html',
    controller: 'noteCtrl',
    resolve: {
    login: function($state, authService) {
      console.log(JSON.parse(localStorage.getItem('loginToken')))
      if (localStorage.getItem('loginToken')) {
        authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            console.log(response);
          if (response.data.loggedIn) {

          } else {
            $state.go('login');
          }
        })
      }
    }
  }
})

  .state('editNote', {
      url:'/editNote/:id',
      templateUrl: 'app/components/notebook/classNotes/editNote.html',
      controller: 'editNoteCtrl',
      resolve: {
      login: function($state, authService) {
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
              console.log(response);
            if (response.data.loggedIn) {

            } else {
              $state.go('login');
            }
          })
        }
      },
        user: function($state, authService){
          if (localStorage.getItem('loginToken')) {
            return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
          } else {

          }
        }
    }
  })

  .state('editNotecard', {
    url: '/editNotecard',
    cache: false,
    templateUrl: 'app/components/notebook/notecards/editNotecard.html',
    controller: 'notebookCtrl',
    resolve: {
      login: function($state, authService) {
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            if (response.data.loggedIn) {

            } else {
              $state.go('login');
            }
          })
        }
      },
        user: function($state, authService){
          if (localStorage.getItem('loginToken')) {
            return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
          } else {

          }
        }

    }
  })

  .state('editEvent', {
    url: '/editEvent/:id',
    templateUrl: 'app/components/calendar/editEvent.html',
    controller: 'editCalendarCtrl',
    cache: false,
    resolve: {
      event: function(calendarService, $stateParams) {
        return calendarService.getEventId($stateParams.id);
      }
    }

  })

  .state('newEvent', {
    url: '/newEvent',
    cache: false,
    templateUrl: 'app/components/calendar/newEvent.html',
    controller: 'calendarCtrl',
    resolve: {
      login: function($state, authService) {
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            if (response.data.loggedIn) {

            } else {
              $state.go('login');
            }
          })
        }
      },
        user: function($state, authService){
          if (localStorage.getItem('loginToken')) {
            return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
          } else {

          }
        }

    }
  })


  .state('editTask', {
    url: '/editTask/:id',
    templateUrl: 'app/components/tasks/editTask.html',
    controller: 'editTasksCtrl',
    cache: false,
    resolve: {
      task: function(taskService, $stateParams) {
        return taskService.getTask($stateParams.id);
      },
      login: function($state, authService) {
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            if (response.data.loggedIn) {

            } else {
              $state.go('login');
            }
          })
        }
      },
        user: function($state, authService){
          if (localStorage.getItem('loginToken')) {
            return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
          } else {

          }
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

  .state('tabsController.subjects', {
    url: '/subjects',
    cache: false,
    views: {
      'tab5': {
        templateUrl: 'app/components/subjects/subjects.html',
        controller: 'subjectCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  console.log(response);
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

.state('tabsController.addSubject', {
  url: '/addSubject',
    cache: false,
    views: {
      'tab5': {
        templateUrl: 'app/components/subjects/addSubject.html',
        controller: 'addSubjectCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    },
    views: {
      'tab5': {
        templateUrl: 'app/components/subjects/editSubject.html',
        controller: 'editSubjectCtrl'
      },
    }
  })


  .state('tabsController.classNoteCards', {
    url: '/notecards',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecards.html',
        controller: 'notecardsCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

  .state('tabsController.notecardStudy1', {
    url: '/notecard1',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecardStudy1.html',
        controller: 'notecardsCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                  console.log(response);
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

  .state('tabsController.notecardStudy2', {
    url: '/notecardStudy2',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'app/components/notebook/notecards/notecardStudy2.html',
        controller: 'notecardsCtrl',
        resolve: {
          login: function($state, authService) {
            if (localStorage.getItem('loginToken')) {
              authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
                if (response.data.loggedIn) {

                } else {
                  $state.go('login');
                }
              })
            }
          },
            user: function($state, authService){
              if (localStorage.getItem('loginToken')) {
                return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
              } else {

              }
            }

        }
      }
    }
  })

  .state('editSubject', {
    url: '/editSubject/:id',
    cache: false,
    controller: "editSubjectCtrl",
    templateUrl: 'app/components/subjects/editSubject.html',
    resolve: {
      subject: function(subjectService, $stateParams) {
        return subjectService.findSubject($stateParams.id);
      },
      login: function($state, authService) {
        if (localStorage.getItem('loginToken')) {
          authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken'))).then(function(response) {
            if (response.data.loggedIn) {
            } else {
              $state.go('login');
            }
          });
        }
      },
      user: function($state, authService){
        if (localStorage.getItem('loginToken')) {
          return authService.getCurrentUser(JSON.parse(localStorage.getItem('loginToken')));
        } else {

        }
      }


    }
  });


  $urlRouterProvider.otherwise('/login');



});
