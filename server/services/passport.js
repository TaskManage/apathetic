var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../components/users/UserModel');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  User.findOne({ email: email })
  .exec(function(err, user) {
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)){
      req.userInfo = user;
      return done(null, user);
    }
    return done(null, false);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
