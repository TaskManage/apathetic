var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
  title: { type: String },
  building: { type: String },
  room: { type: String },
  teacher: { type: String },
  start: {type: Date},
  end: {type: Date},
  icon: String,
  dow: {type: Array},
  backgroundColor: {type: String},
  notes: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Note'}
  ],
  tasks: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Task'}
  ]
});

module.exports = mongoose.model('Subject', SubjectSchema);
