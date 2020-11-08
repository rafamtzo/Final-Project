const express = require("express");
const router = express.Router();
const controller = require('../controllers/serviceController');

router.post('/:userId/new', controller.create_service);

router.get('/:userId', controller.services_from_user);

module.exports = router;