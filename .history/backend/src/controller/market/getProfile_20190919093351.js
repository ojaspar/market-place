const _ = require('lodash');
const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const getMarketProfile = async (req, res, next) => {
    // find market profile
    try {
        const { user } = req;
        const marketProfile = await MarketModel.findOne({ email: user.email });
        if (!marketProfile) return next(createError(404, 'Market not found'));
        if (!marketProfile.active) return next(401, 'Activate market by confirming your email address provided');
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
        });
        // filter a field 
        // const filterProfile = marketInfo.filter(info => info.email == marketInfo.email) 
        res.status(200).send(marketInfo)
    } catch (e) {
        return next(createError(500, e.message))
    }


}
module.exports = getMarketProfile;