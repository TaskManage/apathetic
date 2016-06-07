var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
  title: { type: String },
  building: { type: String },
  room: { type: String },
  teacher: { type: String },
  start: {type: Date},
  end: {type: Date},
  icon: String,
  dow: [],
  backgroundColor: {type: String}
});

module.exports = mongoose.model('Subject', SubjectSchema);
