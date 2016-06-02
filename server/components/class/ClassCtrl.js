var Class = require('./ClassModel.js');
var User = require('../users/UserModel.js');
var Note = require('../notes/NotesModel.js')

module.exports = {

    Create: function(req, res, next) {
      Class.create(req.body, function (err, response) {
        if (err) {
          res.status(500).send(err)
        }
        else {
          res.status(200).send(response)
        }
      })
    },

    Update: function(req, res, next){
      Class.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response) {
        if(err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
        })
    },

  //   Create: function (req, res, next) {
  //   Story.create(req.body, function (err, response) {
  //     if (err) {
  //       res.status(500).send(err)
  //     } else {
  //       User.findByIdAndUpdate(req.body.user, {
  //         $push: {
  //           'story': response
  //         }
  //       },
  //        function (err, user) {
  //         console.log(user);
  //         if (err) {
  //           res.status(500).send(err)
  //         } else {
  //           res.status(200).send(response)
  //         }
  //       })
  //     }
  //   })
  // },

  Read: function(req, res, next) {
    Class.find({}).exec(function (err, response) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).send(response);
      }
    })
  },

  ReadOne: function(req, res, next) {
    Class.findById(req.params.id).exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
      })
    },


  Delete: function(req, res, next){
      Class.findByIdAndRemove(req.params.id, function(err, response){
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(response);
        }
      })
  }
}
