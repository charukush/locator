var express = require('express');
var router = express.Router();
const ctrlMain = require('../controller/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
