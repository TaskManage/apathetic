var mongoose = require('mongoose');

  var notecardSchema = new mongoose.Schema({
    name: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    subject: {type: mongoose.Schema.Types.ObjectId, ref:"Class"},
    front: {type: String},
    back: {type: String},
    createdAt: {type: Date}
  })

  module.exports = mongoose.model("Notecard", notecardSchema)
