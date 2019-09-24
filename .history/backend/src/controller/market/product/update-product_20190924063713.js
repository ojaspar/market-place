const ProductModel = require('../../models/market/Product');
const MarketModel = require('../../../models/market/Market');

const updateProduct = async (req, res) => {
    const { user } = req;
    const updates = Object.keys(req.body);
    const isInclude = ['productName, productDescription, productQuantity, avatar'];
    try {

    } catch (e) {

    }
}
module.exports = updateProduct;