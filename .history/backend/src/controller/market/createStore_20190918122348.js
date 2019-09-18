const bcrypt = require('bcrypt');
const createError = require('http-errors');
const marketModel = require('../../models/market/Market');
const hashcode = 10;
const token = ('../../middleware/token.js');

const register = async (req, res) => {
    const { username, lastname, email, phone, marketName, address, state, firstname, password, role } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, hashcode);
        const createMarket = new marketModel({
            email, state, phone, username, firstname, lastname, marketName, address, password: passwordHash, role
        });
        await createMarket.save();
        res.status(201).send({ message: 'Market created', createMarket })
    } catch (e) {
        createError(500).send(e.message)
    }
}