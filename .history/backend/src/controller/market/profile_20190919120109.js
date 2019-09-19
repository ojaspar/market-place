const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');

const update = async (req, res, next) => {
    const { user } = req;
    // find market
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'address', 'state', 'phone'];
    try {
        const isInclude = await updates.every(update => allowedUpdates.includes(update));
        if (!isInclude) return next(createError(403, 'Invalid update'));
        const market = await MarketModel.findOne({ email: user.email })
    } catch (e) {

    }
}

module.exports = update;