const MarketModel = require('../../models/market/Market');
const createError = require('http-errors')
const confirm = async (req, res) => {
    const token = req.params.token;
    const market = await MarketModel.findOne({
        token
    })
    try {
        if (!market) { }
    } catch (e) { }

}