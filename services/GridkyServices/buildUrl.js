'use strict';

const buildUrl = function (location) {
    return new Promise((resolve) => {
       let url = '';
       url = `https://www.gridky.com/comparateur/${location}`;
       resolve(url);
    });
};

module.exports = buildUrl;
