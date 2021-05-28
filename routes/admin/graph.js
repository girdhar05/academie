var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/graph', {
    title: 'This is form data',
  });
});

module.exports = router;
