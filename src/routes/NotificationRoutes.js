const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');

router.post('/', NotificationController.create);
router.get('/list', NotificationController.getAll);
router.put('/mark-read/:id', NotificationController.markRead);



module.exports = router;
