require('babel-register');

var express = require('express');

var rp = require('request-promise');
var _ = require('highland');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    rp('https://www.motius.de/api/usecases/?format=json' , {json : true})

        .then((data) => res.render('index', { title: 'Motius API Timeline', contents : data}))

        .catch((err) => res.status(503).send('Failed to connect to Motius Server'));

});

module.exports = router;
