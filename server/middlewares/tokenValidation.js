'use strict';

let config = require('../config.js'),
    jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

    let token = req.headers['x-access-token'];

    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, (err, decoded) => {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });

    } 
    else {

        return res.status(401).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
};