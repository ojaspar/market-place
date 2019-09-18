const express = require('express');
const router = express.Router();
const register = require('../../controller/market/createStore');
const { createValidation } = require('../../middleware/market/validator')
router.post('/register', createValidation('register'), errors, register)