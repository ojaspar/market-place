const ProductModel = require('../../models/market/Product');
const MarketModel = require('../../../models/market/Market');
const createError = require('http-errors');

const updateProduct = async (req, res) => {
    const { user } = req;
    const updates = Object.keys(req.body);
    const { productId } = req.params;
    const allowedUpdates = ['productName, productDescription, productQuantity, avatar'];
    try {
        // find market
        const market = await MarketModel.findOne({ email: user.email });
        if (!market) return next(createError(404, 'Market not found'));
        const isInclude = await updates.every(update => allowedUpdates.includes(update));
        if (!isInclude) return next(createError(403, 'Invalid Update'));


    } catch (e) {

    }
}
module.exports = updateProduct;