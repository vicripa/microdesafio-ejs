const express = require('express');
const router = express.Router();
let mainController= require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

router.get('/detalle/:id', mainController.productDetail)

module.exports = router;
