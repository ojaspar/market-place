const _ = require('lodash');
const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const getMarketProfile = async (req, res, next) => {
    // find market profile
    const { user } = req;
    const marketProfile = await MarketModel.findOne({ email: user.email });
    if (!marketProfile) return next(createError(404, 'Market not found'));
    if (!marketProfile.active) return next(401, 'Activate market by confirming your email address provided')
    const marketInfo = _.map(marketProfile, object => {
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
    })
}