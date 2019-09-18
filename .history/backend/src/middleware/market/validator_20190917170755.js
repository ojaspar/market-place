const marketModel = require('../../models/market/Market');
const { check } = require('express-validator');
const message = 'Field is required';

module.exports = {
    createValidation(route) {
        switch (route) {
            case 'register':
                return [
                    check('marketName').not().isEmpty().withMessage(message),
                    check('state').not().isEmpty().withMessage(message),
                    check('address').not().isEmpty().withMessage(message),
                    check('firstName').not().isEmpty().withMessage(message),
                    check('lastName').not().isEmpty().withMessage(message),
                    check('address').not().isEmpty().withMessage(message),
                    check('phone').not().isEmpty().withMessage(message),
                    check('email').not().isEmpty().withMessage(message)
                ];
            default: return []
        }
    }
}