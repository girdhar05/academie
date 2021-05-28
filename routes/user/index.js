var express = require('express');
const news = require('../../Models/news');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  news
    .find()
    .then((result) => {
      console.log(result);
      res.render('user/index', {
        title: 'Express',
        allNews: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
