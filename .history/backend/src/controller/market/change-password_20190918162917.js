const MarketModel = require('../../models/market/Market');
const bcrypt = require('bcrypt');
const creatErrors = require('http-errors');
// const {createValidation} = require('../../middleware/market/validator');
// const errors = require('../../middleware/token');
const changePassword = async (req, res, next) => {
    const { password } = req.body;
    const { user } = req

}