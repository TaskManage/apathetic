var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    title: {type: String,required: true},
    priority: Number,
    status: Number,
    reminder: Number,
    dueDate: Date,
    notes: String,
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    class: String,
    // class: {type: objectId, ref: 'Class'},
});

module.exports = mongoose.model('Task', TaskSchema);
