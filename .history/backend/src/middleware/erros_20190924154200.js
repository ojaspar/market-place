const { validationResult } = require('express-validator');
const checkValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next();
    }
    return res.status(422).send({
        errors: result.array()
    });
}

module.exports = checkValidationResult;