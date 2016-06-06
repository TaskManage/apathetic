var User = require('./UserModel');
var jwt = require('jsonwebtoken');
var config = require('../../config');

module.exports = {

    register: function(req, res, next) {
        console.log('hit', req.body);
        User.create(req.body, function(err, result) {
            if (err) return res.status(500).send(err);
            newUser = result.toObject();
            delete newUser.password;
            if (newUser) {
                var token = jwt.sign({
                    _id: newUser._id,
                    username: newUser.username
                }, config.key);
                res.status(200).json({
                    loggedIn: true,
                    loginToken: token
                });
            }
        });
    },

    me: function(req, res, next) {
        console.log("loggedin", req.get("loginToken"));
        if (req.get('loginToken')) {
            var token = jwt.verify(req.get('loginToken'), config.key);
            User.findById(token._id, function(err, user) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    if (user) {
                      var userInfo = user;
                      delete userInfo.password;
                        res.status(200).json({
                            loggedIn: true,
                            user: userInfo
                        });
                    } else {
                        res.status(200).json({
                            loggedIn: false
                        });
                    }
                }
            })
        } else {
            res.status(200).json({
                loggedIn: false
            });
        }
    },

    update: function(req, res, next) {
        User.findById(req.params._id, function(err, result) {
          result.password = req.body.password;
          result.save(function(err, result) {
            if (err) {
              res.status(500).send(err);
            } else {
            res.status(200).send('user updated');
          }
          });
        });
    }
};
