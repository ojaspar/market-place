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
                    check('email').not().isEmpty().withMessage(message),
                    check('username').not().isEmpty().withMessage(message),
                    check('password').not().isEmpty().withMessage(message).isLength({ min: 7 }).withMessage('Must be more than 7 chars').custom((value, { req }) => {
                        if (value !== req.body.confirmPassword)
                            throw new Error('Password does not match')

                        if (value.toLowerCase().includes('1234567') || value.toLowerCase().includes('password')) throw new Error('Error can not contain password or 12345678')
                    })
                ];
            case 'login':
                return [
                    check('email').not().isEmpty().withMessage(message),
                    check('password').not().isEmpty().withMessage(message)
                ]
            default: return []
        }
    }
}