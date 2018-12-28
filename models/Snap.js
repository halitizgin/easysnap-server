const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snapSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    userId: {
        type: Schema.ObjectId
    }
});

module.exports = mongoose.model('snap', snapSchema);