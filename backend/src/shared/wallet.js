const WalletModel = require('../models/shared/Wallet');
const uniqid = require("uniqid");
const createWallet = (id) => {
    // create wallet id
    const wallet = new WalletModel({
        walletId: uniqid.process(), owner: id,
    });
    return wallet;
}
module.exports = createWallet;