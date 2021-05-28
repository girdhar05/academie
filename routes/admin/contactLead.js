var express = require('express');
const contactLead = require('./../../Models/contactLead');
var router = express.Router();

// /admin/contactLead
router.get('/', (req, res) => {
  contactLead
    .find()
    .then((savedData) => {
      console.log(savedData);
      res.render('admin/contactLead', {
        lead: savedData,
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

// /admin/contactLead
router.post('/', (req, res) => {
  let contactLeadData = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    message: req.body.message,
  };

  let ContactLead = new contactLead(contactLeadData);

  ContactLead.save()
    .then((savedData) => {
      console.log(savedData);
      res.render('user/contact', {
        sucessflag: 'true',
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

// router.post('/', (req, res) => {
//   let contactLeadData = {
//     name: req.body.name,
//     email: req.body.email,
//     number: req.body.number,
//     message: req.body.message,
//   };
//   console.log(contactLeadData);
//   res.render('user/contact', {
//     sucessflag: 'true',
//   });
// });

module.exports = router;
