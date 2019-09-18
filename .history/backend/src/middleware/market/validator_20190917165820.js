const marketModel = require('../../models/market/Market');
const { check } = require('express-validator');
const message = 'Field is required';

module.exports = {
    createValidation(route) {
        switch (route) {
            case 'register':
                return [
                    check('marketName').not().isEmpty().withMessage(message)
                ]
        }
    }
}