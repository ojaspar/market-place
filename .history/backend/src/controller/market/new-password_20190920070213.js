const createError = require('http-errors');
const MarketModel = require('../../models/market/Market');
const bcrypt = require('bcrypt');
const { hashcode } = require('../../../config/key');
const newPassword = async (req, res, next) => {
    const { user } = req;
    const { newPassword, confirmPassword } = req.body;

    // find user
    const market = await MarketModel.findOne({ email: user.email });
    if (!market) return next(createError(404, 'market not found'));

}
module.exports = newPassword;