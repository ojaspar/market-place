const WalletModel = require('../models/shared/Wallet');

const createWallet = async (id) => {
    // create wallet id
    // const WalletId = 
    const wallet = new WalletModel({
        walletId: walletId, owner: id,
    });
    return wallet;
}
module.exports = createWallet;