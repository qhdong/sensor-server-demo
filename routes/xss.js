var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.render('form', {
    digits: randomDigit(),
    inputDigits: req.body.inputDigits
  });
});

router.get('/', function (req, res, next) {
  res.render('form', {digits: randomDigit()});
});

function randomDigit() {
  var n = getRandomInt(0, 10000);
  var digits = n.toString();
  while (digits.length < 4) {
    digits = '0' + digits;
  }
  return digits;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

module.exports = router;
