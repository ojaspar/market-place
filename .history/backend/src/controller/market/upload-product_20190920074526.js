
const ProductModel = require('../../models/market/Product');
const createError = require('http-errors');
const uploadProduct = async (req, res, next) => {
    const { user } = req;
    const { productName, productDescription, productQuantity, avatar } = req.body;
    try {
        // find market ;
        const market = await ProductModel.findOne({
            owner: user._id
        });
        if (!market.active) return next(createError(403, 'Market not active'));
        const product = new ProductModel({
            productQuantity, productDescription, productName, owner: user._id, avatar
        })
        product.save();
        res.status(201).send(product);


    } catch (e) {
        return next(createError(500, e.message));
    }

}