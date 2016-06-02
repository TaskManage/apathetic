var Task = require('./TaskModel');

module.exports = {

  read: function(req, res, next){
    Task.find(req.query, function(err, response){
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  find: function(req, res) {
    Task.findById(req.params.id, function(err, response) {
        return err ? res.status(500).send(err) : res.send(response);
    });
},

  create: function(req, res, next){
    // req.body.creator = req.user._id;
    Task.create(req.body, function(err, response) {
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  update: function(req, res, next){
    console.log(req.body)
    Task.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      console.log(err);
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  delete: function(req, res) {
      Task.findByIdAndRemove(req.params.id, function(err, response) {
          return err ? res.status(500).send(err) : res.send(response);
      });
  }

};
