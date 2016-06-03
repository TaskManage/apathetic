// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var User = require('./components/users/UserModel');
var jwt = require('jsonwebtoken');

// CONFIG //
var config = require('./config');

// CONTROLLERS //
var UserCtrl = require('./components/users/UserCtrl');
var CalendarCtrl = require('./components/calendar/CalendarCtrl');
var SubjectsCtrl = require('./components/subjects/SubjectsCtrl');
var NotesCtrl = require('./components/notes/NotesCtrl');
var TasksCtrl = require('./components/tasks/TasksCtrl');

// SERVICES //
var passport = require('./services/passport');


// POLICIES //
var isAuthed = function(req, res, next) {
  console.log('isAuthed', req.get('loginToken'));
  if (req.get('loginToken')) {
    var token = jwt.verify(req.get('loginToken'), config.key);
    console.log(token);
    User.findById(token._id).exec(function(err, response) {
      if (err) {
        res.status(401);
      } else {
        next();
      }
    })
  } else {
    res.status(401);
  }
};


// EXPRESS //
var app = express();

app.use(bodyParser.json());

app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));

app.use(express.static(__dirname + './../public'));
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*,content-type,x-access-token,Authorization,g-file-name,g-path');
  res.setHeader('Access-Control-Allow-Headers', 'x-access-token,content-type');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, loginToken, X-Custom-Header");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  next();
});

app.use(passport.initialize());
app.use(passport.session());

//-----USERS-----//
app.post('/users', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/users/:_id', isAuthed, UserCtrl.update);

//-----CALENDAR-----//
app.post('/events', CalendarCtrl.createEvent);
app.get('/events', CalendarCtrl.getEvent);
app.put('/events/:id', CalendarCtrl.updateEvent);
app.delete('/events/:id', CalendarCtrl.deleteEvent);

//-----CLASSES-----//
app.post("/class", ClassCtrl.Create);
app.get("/class", ClassCtrl.Read);
app.get("/readClass/:id", ClassCtrl.ReadOne)
app.put("/class/:id", ClassCtrl.Update);
app.delete("/class/:id", ClassCtrl.Delete);

//-----SUBJECTS-----//
app.get('/subjects', SubjectsCtrl.read);
app.get('/subjects/:id', SubjectsCtrl.find);
app.post('/subjects', SubjectsCtrl.create);
app.put('/subjects/:id', SubjectsCtrl.update);
app.delete('/subjects/:id', SubjectsCtrl.delete);

//-----NOTEBOOK-----//
app.post("/note", NotesCtrl.Create);
app.get("/note", NotesCtrl.Read);
app.get("/readNote/:id", NotesCtrl.ReadOne)
app.put("/note/:id", NotesCtrl.Update);
app.delete("/note/:id", NotesCtrl.Delete);

//-----TASKS-----//
app.get('/tasks', TasksCtrl.read);
app.get('/tasks/:id', TasksCtrl.find);
app.post('/tasks', TasksCtrl.create);
app.put('/tasks/:id', TasksCtrl.update);
app.delete('/tasks/:id', TasksCtrl.delete);



//jsonwebtokens

app.post('/login', passport.authenticate('local', {

}), function(req, res, next) {
    console.log('hit', req.userInfo);
    var token = jwt.sign({
        _id: req.userInfo._id,
        username: req.userInfo.username
    }, config.key);
    res.status(200).json({
        login: true,
        loginToken: token
    });
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
        console.log('Listening on port ' + port);
    });
});
