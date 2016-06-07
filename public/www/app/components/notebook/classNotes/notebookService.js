angular.module("studentSuccess").service("notebookService", function($http, ipService, $rootScope){

  var ip = ipService.ip;

    var loginToken = JSON.parse(localStorage.getItem('loginToken'));
    $rootScope.$watch('tokenChange', function(ov, nv){
      loginToken = JSON.parse(localStorage.getItem('loginToken'));
    });


  this.readAllNotes = function(){
    console.log("hit from read all notes service")
    return $http({
      method: 'GET',
      url: ip + '/note',
    }).then(function(response){
      return response.data
    })
  }

  this.addNote = function(noteInfo){
    console.log("hit from addNote beginning-service")
    return $http({
      method:'POST',
      url: ip + '/note/',
     data: noteInfo
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  }

//gets all notes made by the user.
    this.readUserNote = function(user){
      return $http({
        method:"GET",
        url: ip + '/note/' + user._id
      }).then(function(response){
        return response.data
      })
    }

    this.updateNote = function(selNote, noteID){
      return  $http({
        method: "PUT",
        url: ip + '/note/' + noteID,
        data: selNote
      }).then (function(response){
        return response.data
      })
    }

//gets a selected note
this.readNote = function(noteID){
  console.log('readNote reaches this far')
  return $http({
    method:'GET',
    url: ip + '/readNote/' + noteID
  }).then(function(response){
    return response.data
  })
}

//deletes a selected note
this.removeNote = function(noteID){
  return $http({
    method: "DELETE",
    url: ip + '/note/' + noteID
  }).then(function(response){
  })
}

this.removeNotes = function(idArray) {
    console.log("hit from removeNotes", idArray);
    return $http({
      method: 'PUT',
      url: ip + '/deleteNote/',
      data: {_id: idArray},
    }).then(function(res) {
    console.log(res.data);
    }, function(error) {
    console.log(error);
    });
  };

  this.getOrderedClasses = function() {
      // return subjectList;
      return $http({
        method: 'GET',
        headers: {
          loginToken: loginToken
        },
        url: ip + '/readSubjects'
      }).then(function(response) {
        return response.data;
      });
    };


// this.removeNote = function(noteID){
//   return $http({
//     method: "DELETE",
//     url: ip + '/note/' + noteID,
//   }).then(function(response){
//   })
// }

});
