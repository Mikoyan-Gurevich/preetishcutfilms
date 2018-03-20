'use strict';

var error = require('./error');
var respond = require('./respond');
var card = require('./card');

module.exports = function (app) {
    app.all('/_status', function (req, res, next) { res.sendStatus(200); });

    app.post('/createCard', card.create, respond, error);

    app.post('/disableCard', card.disable, respond, error);

    app.post('/deleteCard', card.delete, respond, error);

};