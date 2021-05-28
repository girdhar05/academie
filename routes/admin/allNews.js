var express = require('express');
const news = require('./../../Models/news');
var router = express.Router();

router.get('/', (req, res) => {
  news
    .find()
    .then((result) => {
      res.render('admin/allNews', {
        allNews: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req, res) => {
  let updatedNews = {
    imageUrl:
      typeof imageUrl === undefined ? '' : req.file.path.replace('\\', '//'),
    header: req.body.header,
    subHeader: req.body.subHeader,
    content: req.body.content,
  };
  news
    .findByIdAndUpdate({ _id: req.body.newsId }, updatedNews, {
      useFindAndModify: false,
    })
    .then((data) => {
      console.log(data);
      res.redirect('/admin/allNews');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
