const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const marketModel = new Schema({

});
const Market = mongoose.model('Markets', marketModel);
module.exports = Market
