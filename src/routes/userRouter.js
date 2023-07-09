const { Router } = require('express');
const router = Router();
const signup = require('../controller/auth/signup');
const signin = require('../controller/auth/signin');


router.get('/signup', signup);
router.get('/signin',signin);

module.exports = router;