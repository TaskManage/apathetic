var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
  title: { type: String },
  building: { type: String },
  room: { type: String },
  teacher: { type: String },
  startDate: {type: Date},
  endDate: {type: Date},
  days: [{type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}], //let's see if this works, enum only selects one, but if it is enclosed in an array it should be able to hold mutliple day values
  // startTime: {type: String}, // temporarily commented out for testig,
  // endTime: {type: String} // temporarily commented out for testing --check how the date input works in order to see hows it will be parsed
});

module.exports = mongoose.model('Class', classSchema);
