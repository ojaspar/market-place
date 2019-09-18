const bcrypt = require('bcrypt');
const marketModel = require('../../models/market/Market');
const hashcode = 10;

const register = async (req, res) => {
    const { username, lastname, email, phone, marketName, address, state, firstname, password, role } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, hashcode);
        const createMarket = new marketModel({
            email, state, phone, username, firstname, lastname, marketName, address, password: passwordHash, role
        })
    } catch (e) {

    }
}