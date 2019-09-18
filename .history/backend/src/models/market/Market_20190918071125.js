const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const marketModel = new Schema({
    marketName: {
        type: String,
        required: true,
        toLowercase: true
    }
});
const Market = mongoose.model('Markets', marketModel);
module.exports = Market;
