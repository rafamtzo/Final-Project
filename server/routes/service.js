const express = require("express");
const router = express.Router();
const controller = require('../controllers/serviceController');

router.post('/:userId/new', controller.create_service);

router.get('/:userId', controller.get_services_from_user);

router.delete('/delete/:serviceId', controller.delete_service);

router.put('/edit/:serviceId',controller.edit_service);

module.exports = router;