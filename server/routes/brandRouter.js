const express = require('express');
const router = express();
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), brandController.createBrand);
router.get('/', brandController.getAllBrands);

module.exports = router;