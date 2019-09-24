const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');

const search = async (req, res, next) => {
    const { user } = req;
    const { marketName } = req.body;
    // find market 
    try {
        const market = await MarketModel.findOne({ marketName });
        if (!market) return next(createError(404, 'Market not found'));
        if (!market.active) return next(createError(403, 'Market not active'));
        const marketInfo = _.map(market, object => {
            "email",
                "firstname",
                "lastname",
                "phone",
                "state",
                "address",
                "avater",
                "marketName",
                "username",
                "active"
        });
        console.log(marketInfo)
        res.send(marketInfo)

    } catch (e) {
        return next(createError(e.message));
    }
}
module.exports = search;