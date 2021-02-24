const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');

// Location router
router
    .route('/locations')
        .get(ctrlLocations.locationsListByDistance)
        .post(ctrlLocations.locationsCreate);

router.route('/locations/:id')
        .get(ctrlLocations.locationsReadOne)
        .put(ctrlLocations.locationsUpdate)
        .delete(ctrlLocations.locationsDeleteOne)

        
module.exports = router;
