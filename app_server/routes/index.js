var express = require('express');
var router = express.Router();
const ctrlLocation = require('../controller/location');
const ctrlAbout = require('../controller/others');

/* GET home page. */
router.get('/', ctrlLocation.homeList);
router.get('/location', ctrlLocation.locatiobInfo);
router.get('/location/review',ctrlLocation.addReview);
router.get('/about',ctrlAbout.about);

module.exports = router;
