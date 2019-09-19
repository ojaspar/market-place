const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const confirm = async (req, res, next) => {
    const token = req.params.token;
    const market = await MarketModel.findOne({
        token
    })
    try {
        if (!market) return next(createError(404, 'market not found'));
        if (market.active) return next(createError(400, 'Email address already confirmed'));
        // update market status
        const updateMarket = await MarketModel.findOneAndUpdate({
            token
        }, {
            $set: {
                active: true,
                token: null
            }
        }, {
            new: true,
            runValidators: true
        })
        if (!updateMarket) return next(createError(400, 'wrong confirmation token'))
        await updateMarket.save();
        res.status(200).send({ message: 'email confirmed' })
    } catch (e) {
        return next(createError(500, e.message))
    }

}
module.exports = confirm;