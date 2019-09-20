
const ProductModel = require('../../models/market/Product');
const createError = require('http-errors');
const uploadProduct = async (req, res, next) => {
    const { user } = req;
    // find market ;
    const market = await ProductModel.findOne({
        owner: user._id
    });
    if (!market) return next(createError(404, 'Market not found'));
    if (!market.active) return next(createError(403, 'Market not active'));
}