const userRoute = require('../routes/routes');
const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/', userRoute);

}