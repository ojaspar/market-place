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
            if (!market) return done(null, false, { message: "incorrect email/ password" });
            // check password
            const checkPassword = await bcrypt.compare(password, market.password)
            if (!checkPassword) return done('incorrect email / password')
            return done(null, user);
        } catch (e) {
            return done(e)
        }
    }));
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secret: secret
    }, (jwtPayload, done) => {
        if (Date.now() > jwtPayload.expires) return done('jwt expired')
        return done(null, jwtPayload)
    }))
}