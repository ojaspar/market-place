const UserModel = require('../../models/user/User');
const bcrypt = require('bcrypt');
const { hashcode } = require('../../../config/key');

const register = async (req, res) => {
  const { phone, firstname, lastname } = req.body;
};

module.exports = register;
