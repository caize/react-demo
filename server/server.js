'use strict';

let express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8082,
    router = require('./controllers/index.js'),
    config = require('./config.js'),
    tokenValidation = require('./middlewares/tokenValidation.js'),
    authController = require('./controllers/authController.js'),
    cors = require('cors');

app.use(cors())

app.set('superSecret', config.secret);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', tokenValidation);
app.use('/api', router);
app.use('/authentication/login', authController);


app.listen(port);


