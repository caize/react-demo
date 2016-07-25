'use strict';

let express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    models = require('../models/index.js'),
    config = require('../config.js');

router.post('/', (req, res) => {
    let user = models.Users.findOne(req.body.userName);

    if (!user || !models.Users.verifyPassword(user, req.body.password)){
         res.json({ success: false, message: 'Authentication failed.' })
    }
    else{
        let token = jwt.sign(user, config.secret);

        res.json({
          success: true,
          message: 'Enjoy your token!',
          user: user,
          token: token
        });
    }
});

module.exports = router;
