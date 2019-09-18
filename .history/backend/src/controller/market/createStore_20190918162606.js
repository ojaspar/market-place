const bcrypt = require('bcrypt');
const createError = require('http-errors');
const marketModel = require('../../models/market/Market');
const hashcode = 10;
const { confirmationCode } = ('../../middleware/token.js');
const register = async (req, res) => {
    const { username, lastname, email, phone, marketName, address, state, firstname, password, role } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, hashcode);
        const createMarket = new marketModel({
            email, state, phone, username, firstname, lastname, marketName, address, password: passwordHash, role, token: confirmationCode
        });
        await createMarket.save();
        res.status(201).send({ message: 'Market created', createMarket, token: token })
    } catch (e) {
        createError(500).send(e.message)
    }
}