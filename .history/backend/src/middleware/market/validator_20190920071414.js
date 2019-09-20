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
                    check('firstname').not().isEmpty().withMessage(message),
                    check('lastname').not().isEmpty().withMessage(message),
                    check('address').not().isEmpty().withMessage(message),
                    check('phone').not().isEmpty().withMessage(message),
                    check('email').not().isEmpty().withMessage(message).isEmail().withMessage('Enter a valid email address'),
                    check('role').not().isEmpty().withMessage(message).isNumeric().withMessage('nter a valid role'),
                    check('username').not().isEmpty().withMessage(message),
                    check('password').not().isEmpty().withMessage(message).isLength({ min: 7 }).withMessage('Must be more than 7 chars').isAlphanumeric().withMessage('provide a strong alphanumeric password').custom((value, { req }) => {
                        if (value !== req.body.confirmPassword)
                            throw new Error('Password does not match')

                        if (value.toLowerCase().includes('1234567') || value.toLowerCase().includes('password')) throw new Error('Error can not contain password or 12345678')
                    }),
                    check('confirmPassword').not().isEmpty().withMessage(message)
                ];
            case 'login':
                return [
                    check('email').not().isEmpty().withMessage(message),
                    check('password').not().isEmpty().withMessage(message)
                ];
            case 'withdraw':
                return [
                    check('accountNumber').not().isEmpty().withMessage(message),
                    check('accountName').not().isEmpty().withMessage(message),
                    check('bank').not().isEmpty().withMessage(message),
                    check('amount').not().isEmpty().withMessage(message)
                ]
            case 'addAccount':
                return [
                    check('accountNumber').not().isEmpty().withMessage(message),
                    check('accountName').not().isEmpty().withMessage(message),
                    check('bank').not().isEmpty().withMessage(message)
                ]
            case 'forgotPassword':
                return [
                    check('email').not().isEmpty().withMessage(message)
                ]
            case 'newPassword':
                return [
                    check('password').not().isEmpty().withMessage(message).isAlphanumeric().withMessage('provide a strong password').isLength({ min: 7 }).withMessage('requires 7 characters'),
                    check('confirmPassword').not().isEmpty().withMessage(message).custom((value, { req }) => {
                        if (value !== req.body.password)
                            throw new Error('Password does not match');

                        if (value.toLowerCase().includes('1234567') || value.toLowerCase().includes('password')) throw new Error('Error can not contain password or 12345678');
                    })
                ]
            default: return []
        }
    }
}