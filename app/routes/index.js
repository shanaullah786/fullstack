var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Covid19Cure', description: 'helping covid patients' });
});

router.get('/donor', function (req, res, next) {
  res.render('donor', { title: 'Register to donate', description: 'helping covid patients' });
});
router.get('/patient', function (req, res, next) {
  res.render('patient', { title: 'Register to donate', description: 'helping covid patients' });
});

router.get('/success', function (req, res, next) {
  res.render('success', { title: 'Register to donate', description: 'helping covid patients', ref: req.query.ref });
});

module.exports = router;
