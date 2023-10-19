const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const taskref = require('../models/tasks');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.post('/addtask',taskref.addtask);
/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
