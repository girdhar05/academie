var express = require('express');
const news = require('../../Models/news');
var router = express.Router();

router.get('/:newsId', (req, res) => {
  news.findById(req.params.newsId).then((result) => {
    console.log(result);
    res.render('admin/updateNews', {
      title: 'Update News',
      oldResult: result,
    });
  });
});

module.exports = router;
