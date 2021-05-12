const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// Location router
router.route('/locations')
        .get(ctrlLocations.locationsListByDistance)
        .post(ctrlLocations.locationsCreate);

router.route('/locations/:id')
        .get(ctrlLocations.locationsReadOne)
        .put(ctrlLocations.locationsUpdate)
        .delete(ctrlLocations.locationsDeleteOne)

// reviews router
router.route('/locations/:id/reviews')
        .post(ctrlReviews.reviewsCreate);

router.route('/locations/:id/reviews/:reviewid')
        .get(ctrlReviews.reviewsReadOne)
        .put(ctrlReviews.reviewsUpdateOne)
        .delete(ctrlReviews.reviewsDeleteOne)

module.exports = router;
