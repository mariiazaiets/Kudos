const express = require('express');
const router = express();
const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), typeController.createType);
router.get('/', typeController.getAllTypes);

module.exports = router;