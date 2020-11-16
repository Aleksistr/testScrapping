'use strict'

const GridkyServices = require('../../services/GridkyServices');

const getRealEstateList = function (req, res, next) {
    GridkyServices.buildUrl(req.body.location).then((response) => {
        let links = [];
        res.json({
            status: 'success',
            message: response
        })
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = getRealEstateList;
