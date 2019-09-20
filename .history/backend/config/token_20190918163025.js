const jwt = require('jsonwebtoken');
const secret = 'alocalmarkethubforall';
let confirmationCode = jwt.sign({
    token: 'jonschlinkert'
}, secret);
module.exports = { confirmationCode, secret };