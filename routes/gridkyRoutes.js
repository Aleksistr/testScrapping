'use strict';

const express = require('express');
const router = express.Router();
const gridkyController = require('../controllers/GridkyController');

router.get('/getRealEstateList', gridkyController.getRealEstate);

module.exports = router;
