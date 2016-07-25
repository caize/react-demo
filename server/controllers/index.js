'use strict';

let express = require('express'),
    router = express.Router(),
    usersController = require('./usersController.js'),
    doctorsController = require('./doctorsController.js'),     
    patientsController = require('./patientsController.js');          

router.use((req, res, next)  => {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.use('/users', usersController);
router.use('/patients', patientsController);
router.use('/doctors', doctorsController);


module.exports = router;