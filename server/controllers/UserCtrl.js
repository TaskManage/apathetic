var User = require('../models/UserModel');

module.exports = {

  register: function(req, res, next) {
    console.log('hit', req.body);
    User.create(req.body, function(err, result) {
      if(err) return res.status(500).send(err);
      newUser = result.toObject();
      delete newUser.password;
      res.status(200).json(newUser);
    });
  },

  me: function(req, res, next) {
    if (!req.user) return res.status(401).send('current user not defined');
    delete req.user.password;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {
    User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
      if (err) next(err);
      res.status(200).send('user updated');
    });
  }
};
