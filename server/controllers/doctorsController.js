'use strict';

let express = require('express'),
    router = express.Router(),
    models = require('../models/index.js');


router.get('/:id', (req, res) => {
    let id = req.params.id;

    res.json(models.Doctors.findById(id));   
});


router.get('/:id/patients', (req, res) => {
    let id = req.params.id;

    res.json(models.Patients.findByDoctorId(id));   
});

module.exports = router;
