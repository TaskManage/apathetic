var CalEvent = require('./CalendarModel');

module.exports = {
	createEvent: function(req, res) {
		var newCalEvent = new CalEvent(req.body);
		newCalEvent.save(function(err,s) {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(s);
			}
		});
	},

	getEvent: function(req, res) {
		CalEvent.find({})
			.exec(function(err, s) {
				if (err) {
					res.status(500).json(err);
				} else {
					res.status(200).json(s);
				}
			});
	}
};