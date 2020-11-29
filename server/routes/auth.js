const express = require("express");
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/register', controller.register);

router.get('/register', controller.get_register);

router.post('/login', controller.login);

router.get('/login', controller.get_login);

router.get('/logout', controller.logout);

module.exports = router;