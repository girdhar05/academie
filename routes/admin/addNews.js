var express = require('express');
const news = require('../../Models/news');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/addNews', {
    title: 'This is form data',
    formSubmissionFlag: 'false',
  });
});

router.post('/', (req, res) => {
  let addNewsData = {
    imageUrl: req.file.path.replace('\\', '//'),
    header: req.body.header,
    subHeader: req.body.subHeader,
    content: req.body.content,
  };
  console.log(addNewsData);
  let AddNews = new news(addNewsData);
  AddNews.save()
    .then((savedData) => {
      res.render('admin/addNews', {
        title: 'This is form data',
        formSubmissionFlag: 'true',
        formData: savedData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
