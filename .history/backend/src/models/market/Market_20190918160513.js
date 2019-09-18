const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const marketModel = new Schema({
    marketName: {
        type: String,
        required: true,
        toLowercase: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    confirm: {
        type: Boolean,
        default: false
    }

});
const Market = mongoose.model('Markets', marketModel);
module.exports = Market;
