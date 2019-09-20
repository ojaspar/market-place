const createError = require('http-errors');
const MarketModel = require('../../models/market/Market');
const bcrypt = require('bcrypt');
const { hashcode } = require('../../../config/key');
const newPassword = async (req, res, next) => {
    const { user } = req;
    const { oldPassword, newPassword } = req.body;
    // find user
    const market = await MarketModel.findOne({ email: user.email });
    if (!market) return next(createError(404, 'market not found'));

    // compare password
    const comparePassword = bcrypt.compare(oldPassword, market.password);
    if (!comparePassword) return next(createError(403, 'Password not correct'));

    const hashPassword = bcrypt.hash(newPassword, hashcode);
    const changedPassword = await MarketModel.findOneAndUpdate({
        email: user.email

    }, {
        $set: {
            password: hashPassword
        }
    }, {
        new: true,
        runValidators: true
    });
    res.send(changedPassword)

}
module.exports = newPassword;