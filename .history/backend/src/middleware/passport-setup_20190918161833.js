const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const MarketModel = require('../models/market/Market');

module.exports = passport => {
    passport.use("MarketLogin", new LocalStrategy({
        usernameField: "email"
    }, async (email, password, done) => {
        try {
            const market = await MarketModel.findOne({ email }).exec()
            if (!market) return done(null, false, { message: "incorrect email/ password" })
        } catch (e) {
        }
    }))
}