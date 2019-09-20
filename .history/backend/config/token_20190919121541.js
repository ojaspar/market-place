const jwt = require('jsonwebtoken');
const secret = 'alocalmarkethubforall';
let confirmationCode = jwt.sign({
    token: 'jonschlinkert'
}, secret);
const hashcode = 10;
module.exports = { confirmationCode, secret, hashcode };