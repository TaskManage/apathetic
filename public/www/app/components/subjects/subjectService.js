angular.module("studentSuccess").service("subjectService", function($http, ipService) {

var ip = ipService.ip;



  this.getSubjects = function() {
    // return subjectList;
    return $http({
      method: 'GET',
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

  this.createSubject = function(subject, repeat) {
    return $http({
      method: 'POST',
      url: ip + '/subjects',
      data: {
        title: subject.title,
        building: subject.building,
        room: subject.room,
        teacher: subject.teacher,
        start: subject.start,
        end: subject.end,
        backgroundColor: subject.color,
        dow: repeat

      }
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
});
