const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    brithday: Date,
    phone: String,
    scholl: String,
    class: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);