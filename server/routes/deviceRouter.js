const express = require('express');
const router = express();
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.createDevice);
router.get('/', deviceController.getAllDevice);
router.get('/:id', deviceController.getOneDevice);

module.exports = router;