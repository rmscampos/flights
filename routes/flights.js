const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);



module.exports = router;
