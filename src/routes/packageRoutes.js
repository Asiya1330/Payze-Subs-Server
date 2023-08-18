const express = require('express');
const router = express.Router();
const PackageController = require('../controllers/PackageController');

router.post('/', PackageController.create);
router.get('/list', PackageController.getAll);


module.exports = router;
