const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const confirm = async (req, res, next) => {
    const token = req.params.token;
    const market = await MarketModel.findOne({
        token
    })
    try {
        if (!market) return next(createError(404, 'market not found'))

    } catch (e) { }

}