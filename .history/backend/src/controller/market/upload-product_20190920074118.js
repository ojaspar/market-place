
const ProductModel = require('../../models/market/Product');
const createError = require('http-errors');
const uploadProduct = async (req, res, next) => {
    const { user } = req;
    const { productName, productDescription, productQuantity } = req.body;
    try {
        // find market ;
        const market = await ProductModel.findOne({
            owner: user._id
        });
        if (!market) return next(createError(404, 'Market not found'));
        if (!market.active) return next(createError(403, 'Market not active'));
        // create product
        const product = new ProductModel({
            productQuantity, productDescription, productName, owner: user._id
        })
    } catch (e) {
        return next(createError(500, e.message));
    }

}