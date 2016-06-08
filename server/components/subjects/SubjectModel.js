var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
  title: { type: String },
  building: { type: String },
  room: { type: String },
  teacher: { type: String },
  start: Date,
  end: Date,
  icon: String,
  dow: [],
  backgroundColor: {type: String},
  notes: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Note'}
  ],
  tasks: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Task'}
  ]
});

module.exports = mongoose.model('Subject', SubjectSchema);
