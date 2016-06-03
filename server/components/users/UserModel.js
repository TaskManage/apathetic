var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, index: true, trim: true },
  password: { type: String },
  createdAt: {type: Date, default: new Date()},
  classes: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Class'}
  ],
  notes:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'Notes'}
  ],
  events: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Events'}
  ],
  avatar: {type:String, default:'http://globalci.org/wp-content/themes/gci/images/default.jpg'}
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);
