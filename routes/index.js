var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gregory Fernandes' });
});

router.get('/portfolio', function(req, res) { 
    res.render('portfolio', { title: 'My Portfolio' });
});

router.get('/cv', function(req, res) { 
    res.render('cv', { title: 'My CV' });
});

module.exports = router;
