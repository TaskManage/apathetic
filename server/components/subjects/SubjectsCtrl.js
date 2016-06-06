var Subject = require('./SubjectModel');
var User = require('../users/UserModel');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');

module.exports = {

  read: function(req, res, next) {
      var token = jwt.verify(req.get('loginToken'), config.key);
      User.findById(token._id).populate('subjects').exec(function(err, response) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.status(200).send(response);
          }
      })
  },

  find: function(req, res) {
    Subject.findById(req.params.id, function(err, response) {
        return err ? res.status(500).send(err) : res.send(response);
    });
},

create: function(req, res, next) {
  var token = jwt.verify(req.get('loginToken'), config.key);
    Subject.create(req.body, function(err, response) {
      console.log(req.body, err);
        if (err) {
            res.status(500).send(err)
        } else {
            User.findByIdAndUpdate(token._id, {
                $addToSet: {
                    'subjects': response._id
                }
            }).exec(function() {
                res.status(200).send(response);
            })
        }
    });
},

  update: function(req, res, next){
    Subject.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  delete: function(req, res) {
      Subject.findByIdAndRemove(req.params.id, function(err, response) {
          return err ? res.status(500).send(err) : res.send(response);
      });
  }

};
