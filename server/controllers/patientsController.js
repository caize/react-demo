'use strict';

let express = require('express'),
    router = express.Router(),
    models = require('../models/index.js'),
    fs = require('fs');


const multer = require('multer'),
    storage = multer.diskStorage({
        destination: (req, file, cb) =>  cb(null, `./uploads/${req.params.id}/`),
        filename: (req, file, cb) =>  cb(null, file.originalname)
    }),
    upload = multer({ storage:  storage}).single('file');


router.get('/:id', (req, res) => {
    let id = req.params.id;
    
    res.json(models.Patients.findById(id));   
});

router.post('/:id/documents', (req, res) => {
    let id = req.params.id,
        dir = `./uploads/${id}/`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    upload(req, res, function(err){
        if (err) {
            console.log(err);
            res.json({ message: `ERROR for id ${id}: ${err}`  });   
            return;
        }
        else{
            res.json({ message: `You sent in a document for id ${id}` });   
        }
    });

    
});

router.get('/:id/documents', (req, res) => {

    let id = req.params.id;
    let dir = `./uploads/${req.params.id}/`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    res.json(fs.readdirSync(dir));   
});

module.exports = router;
