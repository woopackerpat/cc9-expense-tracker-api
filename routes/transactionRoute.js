const router = require('express').Router();

const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.getTransactions);
router.get('/:id', transactionController.getTransaction);
router.post('/', transactionController.createTransaction);

module.exports = router;
