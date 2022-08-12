const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type:Number
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Number
    },
    subject: {
        required: true,
        type: String
    },
    short_description: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema)