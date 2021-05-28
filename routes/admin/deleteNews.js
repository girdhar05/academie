var express = require('express');
const fs = require('fs');
let path = require('path');
const news = require('../../Models/news');
var router = express.Router();
// ./../../uploads/${result.imageUrl.replace('uploads//', '')}
router.get('/:newsId', (req, res) => {
  news
    .findOneAndDelete({ _id: req.params.newsId })
    .then((result) => {
      let fileName = result.imageUrl.replace('uploads//', '');
      let pathToFile = path.join(__dirname + `uploads/{fileName}`);
      console.log(result.imageUrl.replace('uploads//', ''));
      fs.unlink(pathToFile, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('file Successfully Deleted');
        }
      });

      res.redirect('/admin/allNews');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
