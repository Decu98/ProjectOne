var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tictactoe', { title: 'TicTacToe' });
});

module.exports = router;
