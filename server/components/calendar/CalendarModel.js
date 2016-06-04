var mongoose = require('mongoose');

var calEvent = new mongoose.Schema({
	title: {type: String},
	start: {type: Date, require: true},
	end: {type: Date, require: true},
	allDay: {type: String},
	location: {type: String},
	notes: {type: String}
});

module.exports = mongoose.model('CalEvent', calEvent);