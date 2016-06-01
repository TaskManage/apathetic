var mongoose = require('mongoose');
var Task = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var TaskSchema = mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    title: {type: String,required: true},
    priority: Number,
    status: Number,
    deadline: {type: Date, default: new Date()},
    creator: {type: objectId, ref: 'User'},
    users: [{type: objectId, ref: 'User'}],
    project: {type: objectId, ref: 'Project'},
});

module.exports = mongoose.model('Task', TaskSchema);
