var Note = require('./NotesModel.js');
var User = require('../users/UserModel.js');
var Subject = require('../subjects/SubjectModel.js')
var jwt = require('jsonwebtoken');
var config = require('../../config.js')

module.exports = {

  // Create: function (req, res, next) {
  //   var token = jwt.verify(req.get('loginToken'), config.key);
  // 		Note.create(req.body, function (err, response) {
  // 			if (err) {
  // 				res.status(500).send(err)
  // 			} else {
  // 				Subject.findByIdAndUpdate(req.body.subject, {
  // 					$addToSet: {
  // 						'notes': response._id
  // 					}
  // 				}).exec(function(){
  //           res.status(200).send(response);
  //         })
  // 			}
  // 		});
  // 	},

  Create: function(req, res, next) {
    console.log(req.body);
    var token = jwt.verify(req.get('loginToken'), config.key);
      // req.body.creator = req.user._id;
      Note.create(req.body, function(err, response) {
        // console.log(response);
          if (err) {
              res.status(500).send(err)
          } else {
              // console.log("THIS IS THE USER " + token._id);
              Subject.findByIdAndUpdate(req.body.subject, {
                  $addToSet: {
                      'notes': response._id
                  }
              }).exec(function() {
                  res.status(200).send(response);
              })
          }
      });
  },

    readNotes: function(req, res, next) {
          var token = jwt.verify(req.get('loginToken'), config.key);
          User.findById(token._id).populate('notes').exec(function(err, response) {
              if (err) {
                  res.status(500).send(err);
              } else {
                  res.status(200).send(response);
              }
          })
      },

    getUserNotes: function(req, res, next) {
         var token = jwt.verify(req.get('loginToken'), config.key);
         User.findById(token._id).populate({path: 'subjects', populate: {path: 'notes'} }).exec(function(err, response) {
             if (err) {
                 res.status(500).send(err);
             } else {
                 res.status(200).send(response);
             }
         })
     },


    // Create: function(req, res, next) {
    //   Note.create(req.body, function (err, response) {
    //     if (err) {
    //       res.status(500).send(err)
    //     }
    //     else {
    //       res.status(200).send(response)
    //     }
    //   })
    // },

    Update: function(req, res, next){
      Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response) {
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
    Note.find({}).exec(function (err, response) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).send(response);
      }
    })
  },

  ReadOne: function(req, res, next) {
    Note.findById(req.params.id).exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
      })
    },


  Delete: function(req, res, next){
      Note.findByIdAndRemove(req.params.id, function(err, response){
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(response);
        }
      })
  },

  DeleteMany: function(req, res, next){
    console.log(req.body._id);
    Note.find({_id:{$in:req.body._id}}).remove().exec(function(err, response){
      console.log(response);
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(response);
        }
      })
  },
}
