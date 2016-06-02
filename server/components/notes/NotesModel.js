var mongoose = require('mongoose');

  var noteSchema = new mongoose.Schema({
    name: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    class: {type: mongoose.Schema.Types.ObjectId, ref:"Class"},
    message: {type: String},
    createdAt: {type: Date}
  })

  module.exports = mongoose.model("Note", noteSchema)
