var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('user/faculty', {
    successFlag: 'false',
  });
});

module.exports = router;
