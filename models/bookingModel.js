const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    status: {
        type: String,
        required: true
    },
    customer: {
        type: JSON,
        required: true
    },
    item: {
        type: JSON,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    createdon: {
        type: Date,
        default: Date.now()
    }

});

module.exports = {Booking: mongoose.model('booking', bookingSchema )};