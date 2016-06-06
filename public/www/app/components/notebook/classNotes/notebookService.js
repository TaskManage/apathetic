angular.module("studentSuccess").service("notebookService", function($http, ipService){

var ip = ipService.ip;

//Creates a new note

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
      url: ip + '/note',
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
        url: ip + '/note' + user._id,
      }).then(function(response){
        return response.data
      })
    }

    this.updateNote = function(noteData, noteID){
      return $http({
        method: "PUT",
        url: ip + '/note' + noteId,
        data: noteData
      }).then (function(response){
        return response.data
      })
    }

//gets a selected note
this.readNote = function(noteID){
  return $http({
    method:'GET',
    url: ip + '/note' + noteId,
  }).then(function(response){
    return response.data
  })
}

//deletes a selected note
this.removePage = function(noteID){
  return $http({
    method: "DELETE",
    url: ip + '/note' + noteId,
  }).then(function(response){
  })
}
});
