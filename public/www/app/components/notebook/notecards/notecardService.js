angular.module("studentSuccess").service("notecardService", function($http, ipService){

var ip = ipService.ip;

  this.readAllNotecards = function(){
    console.log("hit from read all notes service")
    return $http({
      method: 'GET',
      url: ip + '/note',
    }).then(function(response){
      return response.data
    })
  }

  this.addNotecard = function(noteInfo){
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
    this.readUserNotecard = function(user){
      return $http({
        method:"GET",
        url: ip + '/note/' + user._id
      }).then(function(response){
        return response.data
      })
    }

    this.updateNotecard = function(selNote, noteID){
      return  $http({
        method: "PUT",
        url: ip + '/note/' + noteID,
        data: selNote
      }).then (function(response){
        return response.data
      })
    }

//gets a selected note
this.readNotecard = function(noteID){
  console.log('readNote reaches this far')
  return $http({
    method:'GET',
    url: ip + '/readNote/' + noteID,
  }).then(function(response){
    return response.data
  })
}

//deletes a selected note
this.removeNotecard = function(noteID){
  return $http({
    method: "DELETE",
    url: ip + '/note/' + noteID,
  }).then(function(response){
  })
}

this.removeNotecards = function(idArray) {
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

// this.removeNote = function(noteID){
//   return $http({
//     method: "DELETE",
//     url: ip + '/note/' + noteID,
//   }).then(function(response){
//   })
// }

});
