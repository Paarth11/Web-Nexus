const { Router } = require('express');
const router = Router();
const signup = require('../controller/auth/signup');
const signin = require('../controller/auth/signin');
const register = require('../controller/auth/register');
const login = require('../controller/auth/login');
const logout = require('../controller/auth/logout');


router.get('/signup', signup);
router.get('/signin',signin);
router.post('/signup',register)
router.post('/signin',login)
router.get('/logout',logout)

module.exports = router;