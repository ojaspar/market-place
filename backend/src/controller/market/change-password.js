const MarketModel = require('../../models/market/Market');
const bcrypt = require('bcrypt');
const creatErrors = require('http-errors');
const { hashcode } = require('../../../config/key')
const changePassword = async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    // find market
    try {
        const passwordHash = await bcrypt.hash(password, hashcode);
        const market = await MarketModel.findOneAndUpdate({
            email: user.email
        }, {
            $set: {
                password: passwordHash
            }
        }, {
            new: true,
            runValidators: true
        });
        if (!market) return next(creatErrors(404, 'Market not found'))
        res.send(market)
    } catch (e) {
        return next(creatErrors(500, e.message))
    }

}
module.exports = changePassword;