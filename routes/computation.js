var express = require('express');
var router = express.Router();

var sum = 0;
var more = 0;

/* GET users listing. */
router.get('/', function (req, res, next) {
  let x = Math.random().toFixed(2);
  let y = Math.random().toFixed(2);

  res.render('Computation', {
    title: 'Computation',
    value1: `Math.atan2() applied to ` + x + ` is ${Math.atan2(x, y).toFixed(2)}`,
    value2: `Math.atanh() applied to ` + x + ` is ${Math.atanh(x).toFixed(2)}`,
    value3: `Math.cbrt() applied to ` + x + ` is ${Math.cbrt(x).toFixed(2)}`,
  });
});

module.exports = router;
