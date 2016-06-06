var Task = require('./TaskModel');
var User = require('../users/UserModel');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');

module.exports = {

    read: function(req, res, next) {
        Task.find(req.query, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    find: function(req, res) {
        Task.findById(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    create: function(req, res, next) {
      var token = jwt.verify(req.get('loginToken'), config.key);
        // req.body.creator = req.user._id;
        Task.create(req.body, function(err, response) {
          // console.log(response);
            if (err) {
                res.status(500).send(err)
            } else {
                // console.log("THIS IS THE USER " + token._id);
                User.findByIdAndUpdate(token._id, {
                    $addToSet: {
                        'tasks': response._id
                    }
                }).exec(function() {
                    res.status(200).send(response);
                })
            }
        });
    },

    update: function(req, res, next) {
        console.log(req.body)
        Task.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
            console.log(err);
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    delete: function(req, res) {
        Task.findByIdAndRemove(req.params.id, function(err, response) {
            return err ? res.status(500).send(err) : res.send(response);
        });
    },

    getUserTasks: function(req, res, next) {
        var token = jwt.verify(req.get('loginToken'), config.key);
        console.log("THIS IS THE TOKEN " + token._id);
        User.findById(token._id).populate('tasks').exec(function(err, response) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(response);
            }
        })
    }

};
