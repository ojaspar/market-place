const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const productModel = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    avatar: {
        type: Buffer
    }
})

const Product = mongoose.model('Products', productModel);
module.exports = Product;