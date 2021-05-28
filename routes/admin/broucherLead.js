var express = require('express');
var path = require('path');
var fs = require('fs');
const broucherLead = require('./../../Models/broucherLead');
var router = express.Router();

router.get('/', (req, res) => {
  broucherLead
    .find()
    .then((savedData) => {
      console.log(savedData);
      res.render('admin/broucherLead', {
        lead: savedData,
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

router.post('/', (req, res) => {
  let broucherLeadData = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    message: req.body.message,
  };

  let BroucherLead = new broucherLead(broucherLeadData);

  BroucherLead.save()
    .then((savedData) => {
      console.log(savedData);
      res.download('prospectus.pdf');
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

module.exports = router;
