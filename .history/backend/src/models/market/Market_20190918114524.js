const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const marketModel = new Schema({
    marketName: {
        type: String,
        require: true,
        toLowercase: true
    },
    state: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },

});
const Market = mongoose.model('Markets', marketModel);
module.exports = Market;
