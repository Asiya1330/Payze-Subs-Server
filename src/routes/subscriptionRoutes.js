const express = require('express');
const router = express.Router();
const SubscriptionController = require('../controllers/SubscriptionController');

router.post('/', SubscriptionController.create);
router.delete('/:id', SubscriptionController.delete);
router.put('/:id', SubscriptionController.update);
router.get('/list', SubscriptionController.getAll);
router.post('/check-subs', SubscriptionController.checkSubs);



module.exports = router;
