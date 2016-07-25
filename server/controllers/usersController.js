'use strict';

let express = require('express'),
    router = express.Router(),
    models = require('../models/index.js');

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(models.Users.findById(id));
});

module.exports = router;
