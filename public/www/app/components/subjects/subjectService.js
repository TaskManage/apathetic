angular.module("studentSuccess").service("subjectService", function($http, ipService) {

var ip = ipService.ip;



  this.getSubjects = function() {
    // return subjectList;
    return $http({
      method: 'GET',
      url: ip + '/subjects'
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };


  this.findSubject = function(id) {
    console.log("FIND SUBJECT HIT!", id);
    return $http({
      method: 'GET',
      url: ip + '/subjects/' + id
    }).then(function(response) {
      console.log("RESPONSE DATA HIT", response.data);
      return response.data;
    });
  };

  this.createSubject = function(subject) {
    return $http({
      method: 'POST',
      url: ip + '/subjects',
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

  this.deleteSubject = function(id) {
    return $http({
      method: 'DELETE',
      url: ip +  '/subjects/' + id
    }).then(function(response) {
      return response;
    });
  };
});
