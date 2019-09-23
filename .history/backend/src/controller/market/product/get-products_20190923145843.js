const ProductModel = require('../../../models/market/Product');
const MarketModel = require('../../../models/market/Market');
const createError = require('http-errors');
const getAllMarketProduct = async (req, res, next) => {
    const { user } = req;
    const limit = req.query;

    // find market 
    const market = await MarketModel.findOne({ email: user.email });
    if (!market) return next(createError(404, 'Market not found'));

    // 
    const products = await ProductModel.find({ owner: market._id });
    if (!products) return res.status(200).send('Market has no product');
    res.status(200).send(products)


}
module.exports = getAllMarketProduct;