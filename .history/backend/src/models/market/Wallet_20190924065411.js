const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const walletModel = new Schema({

});

const Wallet = mongoose.model('Wallet', walletModel);
module.exports = Wallet;