const _ = require('lodash');
const MarketModel = require('../../models/market/Market');
const createError = require('http-errors');
const getMarketProfile = async (req, res, next) => {
    // find market profile
    const { user } = req;

}