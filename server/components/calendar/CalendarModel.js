var mongoose = require('mongoose');

var calEvent = new mongoose.Schema({
	title: {type: String},
	start: {type: Date},
	end: {type: Date},
	allDay: {type: String},
	location: {type: String},
	notes: {type: String}
});

module.exports = mongoose.model('CalEvent', calEvent);