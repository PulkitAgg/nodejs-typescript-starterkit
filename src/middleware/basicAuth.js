"use strict";
//========================== Load Modules Start ===========================
var auth = require('basic-auth');
//========================== Load internal Module =========================
var config = require('../../config/index');
var constants = require('../constant');
//========================== Load Modules End =============================

var basicAuthentication = function (request, response, next) {
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    }
    var credentials = auth(request);
    if (!credentials || credentials.name !== config.cfg.basicAuth.name || credentials.pass !== config.cfg.basicAuth.pass) {
        response.statusCode = 401
        response.send({ message: constants.MESSAGES.ACCESS_DENIED })
    } else {
        next();
    }
}

module.exports = {
    basicAuthentication
}