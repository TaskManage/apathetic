angular.module("studentSuccess").service("subjectService", function($http, ipService, $rootScope) {

  var ip = ipService.ip;
  var loginToken = JSON.parse(localStorage.getItem('loginToken'));

  $rootScope.$watch('tokenChange', function(ov, nv){

    loginToken = JSON.parse(localStorage.getItem('loginToken'));
  });

this.getSubjects = function() {
    // return subjectList;
    return $http({
      method: 'GET',
      headers: {
        loginToken: loginToken
      },
      url: ip + '/subjects'
    }).then(function(response) {
      return response.data;
    });
  };


  this.findSubject = function(id) {
    return $http({
      method: 'GET',
      url: ip + '/subjects/' + id
    }).then(function(response) {
      console.log("FINDERS HIT", response.data);
      return response.data;
    });
  };

  this.createSubject = function(subject) {
    return $http({
      method: 'POST',
      url: ip + '/subjects',
      headers: {
        loginToken: loginToken
      },
      data: subject
    }).then(function(response) {
      return response;
    });
  };

  this.updateSubject = function(subject) {
    return $http({
      method: 'PUT',
      url: ip + "/subjects/" + subject._id,
      data: subject,
    }).then(function(response) {
      return response;
    });
  };

  this.deleteSubject = function(subject) {
    return $http({
      method: 'DELETE',
      url: ip +  '/subjects/' + subject._id
    }).then(function(response) {
      return response;
    });
  };

  // this.getUserSubjects = function()
});
