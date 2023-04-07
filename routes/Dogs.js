var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dogs', { title: 'Search Results of Dogs' });
});

module.exports = router;