// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

// CONFIG //
var config = require('./config');

// CONTROLLERS //
var UserCtrl = require('./controllers/UserCtrl');

// SERVICES //
var passport = require('./services/passport');


// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};


// EXPRESS //
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + './../public'));

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Custom-Header");
  next();
});
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/users', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/users/:_id', isAuthed, UserCtrl.update);

app.post('/login', passport.authenticate('local', {
  // successRedirect: '/me'
}),
function(req, res, next){
  res.status(200).json({login:true});
});
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});


// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
