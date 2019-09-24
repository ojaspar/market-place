const jwt = require("jsonwebtoken");
const passport = require('passport');
const { secret } = require('../../../config/key')
module.exports = (req, res) => {
    passport.authenticate("MarketLogin", { session: false }, (error, user) => {
        if (error || !user) return res.status(400).send(error);

        const payload = {
            email: user.email,
            expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS)
        };

        // assign payload to req.user
        req.login(payload, { session: false }, error => {
            if (error) return res.status(400).send(error);

            // generate a signed json web token and return it in the response
            const token = jwt.sign(JSON.stringify(payload), secret);

            /** assign our jwt to the cookie */
            res.cookie("jwt", jwt, { httpOnly: true, secure: true });
            res.status(200).send({ user, token });
        });
    })(req, res);
};