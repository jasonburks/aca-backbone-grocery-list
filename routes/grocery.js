const express = require('express');
const router = express.Router();
const GroceryController = require('../controllers/GroceryController.js');


/* GET grocery listing. */
router.get('/', GroceryController.list);

router.post('/', GroceryController.create);

router.put('/:id', GroceryController.update);

module.exports = router;
