const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');

const profile = async (req, res, next) => {
    const { user } = req;
    // find market
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'address', 'state', 'phone'];
    try {
        const isInclude = await updates.every(update => allowedUpdates.includes(update));
        if (!isInclude) return next(createError(403, 'Invalid update'));
        const market = await MarketModel.findOne({ email: user.email });
        if (!market) return next(createError(404, 'Market not found'));
        if (!market.active) return next(createError(403, 'Market not confirmed'));
        updates.forEach(update => (market[update] = req.body[update]));
        await market.save();
        res.status(200).send(market);
    } catch (e) {

    }
}

module.exports = profile;