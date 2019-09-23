const ProductModel = require('../../../models/market/Product');
const MarketModel = require('../../../models/market/Market');
const createError = require('http-errors');
const getAllMarketProduct = async (req, res, next) => {
    const { user } = req;
    // find market 
    const market = await MarketModel.findOne({ email: user.email });
    if (!market) return next(createError(404, 'Market not found'))
}
module.exports = getAllMarketProduct;