'use strict';

const puppeteer = require('puppeteer');

const getLinkListFromUrl = async function (url) {
    const browser = await puppeteer.launch({
       headless: false,
       defaultViewport: null,
       args: ['--start-maximized']
    });
    const page = await browser.newPage();
    var linkList = [];
}
