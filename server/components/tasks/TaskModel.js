var mongoose = require('mongoose');
var Task = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var TaskSchema = mongoose.Schema({
    creator: {type: objectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    title: {type: String,required: true},
    priority: Number,
    status: Number,
    reminder: Number,
    dueDate: Date,
    notes: String,
    users: [{type: objectId, ref: 'User'}],
    subject: {type: objectId, ref: 'Subject'},
});

module.exports = mongoose.model('Task', TaskSchema);
