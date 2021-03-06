var Notecard = require('./NotecardModel.js');
var User = require('../users/UserModel.js');

module.exports = {

  // Create: function (req, res, next) {
  // 		Note.create(req.body, function (err, response) {
  // 			if (err) {
  // 				res.status(500).send(err)
  // 			} else {
  // 				User.findByIdAndUpdate(req.body.user, {
  // 					$addToSet: {
  // 						'story': response
  // 					}
  // 				},
  //          function (err, user) {
  // 					console.log(user);
  // 					if (err) {
  // 						res.status(500).send(err)
  // 					} else {
  // 						res.status(200).send(response)
  // 					}
  // 				})
  // 			}
  // 		})
  // 	},

    Create: function(req, res, next) {
      Notecard.create(req.body, function (err, response) {
        if (err) {
          res.status(500).send(err)
        }
        else {
          res.status(200).send(response)
        }
      })
    },

    Update: function(req, res, next){
      Notecard.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, response) {
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
    Notecard.find({}).exec(function (err, response) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).send(response);
      }
    })
  },

  ReadOne: function(req, res, next) {
    Notecard.findById(req.params.id).exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
      })
    },


  Delete: function(req, res, next){
      Notecard.findByIdAndRemove(req.params.id, function(err, response){
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(response);
        }
      })
  },

  DeleteMany: function(req, res, next){
    console.log(req.body._id);
    Notecard.find({_id:{$in:req.body._id}}).remove().exec(function(err, response){
      console.log(response);
        if(err){
          res.status(500).json(err);
        }else{
          res.status(200).json(response);
        }
      })
  }
}
