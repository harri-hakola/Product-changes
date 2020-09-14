const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    products: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    reason: {
        type: String,
        required: true
    },
    change: {
        type: String,
        required: true
    },
    additional_information: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("machining", schema);