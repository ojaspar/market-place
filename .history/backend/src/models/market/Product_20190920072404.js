const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const productModel = new Schema({
    productName ={
        type: String,
        required: true,
        unique: true
    }
})

const Product = mongoose.model('Products', productModel);
module.exports = Product;