const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const walletModel = new Schema({
    walletId: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Market'
    },
    currentBalance: {
        type: Number,
        required: true,
        default: 0
    },
    previousBalance: {
        type: Number,
        required: true,
        default: 0
    }
});

const Wallet = mongoose.model('Wallet', walletModel);
module.exports = Wallet;