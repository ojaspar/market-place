const MarketModel = require('../../models/market/Market');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/token');
const createError = require('http-errors');
const reset = async (req, res, next) => {
    const { email } = req.body;
    try {
        // find email
        const market = await MarketModel.findOne({ email });
        if (!market) return next(createError(400, 'Market not found'));
        if (!market.active) return next(createError(403, 'Account not activated'));
        const payload = {
            email: market.email,
            expires: Date.now() + 30000
        }
        const token = jwt.sign(JSON.stringify(payload), secret);
        res.send(200).send({ token })
    } catch (e) {
        return next(createError(500, e.message))
    }
}