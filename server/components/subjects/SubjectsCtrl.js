var Subject = require('./SubjectModel');

module.exports = {

  read: function(req, res, next){
    Subject.find(req.query, function(err, response){
      return err ? res.status(500).send(err) : res.send(response);
    });
  },

  find: function(req, res) {
    Subject.findById(req.params.id, function(err, response) {
        return err ? res.status(500).send(err) : res.send(response);
    });
},

  create: function(req, res, next){
    Subject.create(req.body, function(err, response) {
      return err ? res.status(500).send(err) : res.send(response);
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
