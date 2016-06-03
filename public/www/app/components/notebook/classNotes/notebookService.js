angular.module("studentSuccess").service("notebookService", function($http){

//Creates a new note

  this.readAllNotes = function(){
    console.log("hit from read all notes service")
    return $http({
      method: 'GET',
      url: "http://192.168.0.220:3000/note/"
    }).then(function(response){
      return response.data
    })
  }

  this.addNote = function(noteInfo){
    console.log("hit from addNote beginning-service")
    return $http({
      method:'POST',
      url: "http://192.168.0.220:3000/note/",
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
        url: "http://192.168.0.220:3000/note/" + user._id,
      }).then(function(response){
        return response.data
      })
    }

    this.updateNote = function(noteData, noteID){
      return $http({
        method: "PUT",
        url: "http://192.168.0.220:3000/note/" + noteId,
        data: noteData
      }).then (function(response){
        return response.data
      })
    }

//gets a selected note
this.readNote = function(noteID){
  return $http({
    method:'GET',
    url: "http://192.168.0.220:3000/note/" + noteId
  }).then(function(response){
    return response.data
  })
}

//deletes a selected note
this.removePage = function(noteID){
  return $http({
    method: "DELETE",
    url: "http://192.168.0.220:3000/note/" + noteId
  }).then(function(response){
  })
}
});
