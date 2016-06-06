var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
  title: { type: String },
  building: { type: String },
  room: { type: String },
  teacher: { type: String },
  notes: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Note'}
  ],
  tasks: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Task'}
  ],
  // startDate: {type: Date},
  // endDate: {type: Date},
  days: [{type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}], //let's see if this works, enum only selects one, but if it is enclosed in an array it should be able to hold mutliple day values
  // startTime: {type: Date},
  // endTime: {type: Date} // check how the date input works in order to see hows it will be parsed
  startTime: Date,
  endTime: Date,
  icon: String
});

module.exports = mongoose.model('Subject', SubjectSchema);
