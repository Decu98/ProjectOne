var express = require('express');
var router = express.Router();

/* Get path to files */
var dir = __dirname
dir = dir.replace('routes','')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/javascripts/tictactoe', function (req, res, next) {
    res.sendFile(dir + "/public/javascripts/tictactoe.js");
});

module.exports = router;