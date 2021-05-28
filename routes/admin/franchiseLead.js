var express = require('express');
const franchiseLead = require('../../Models/franchiseLead');
var router = express.Router();

router.get('/', (req, res) => {
  franchiseLead
    .find()
    .then((savedData) => {
      console.log(savedData);
      res.render('admin/franchiseLead', {
        lead: savedData,
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

// router.get('/', (req, res) => {
//   res.render('admin/franchiseLead', {
//     title: 'This is form data',
//   });
// });

router.post('/', (req, res) => {
  let franchiseLeadData = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    investment: req.body.investment,
    message: req.body.message,
  };

  let FranchiseLead = new franchiseLead(franchiseLeadData);

  FranchiseLead.save()
    .then((savedData) => {
      console.log(savedData);
      res.render('user/franchise', {
        successFlag: 'true',
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

// router.post('/', (req, res) => {
//   let franchiseLeadData = {
//     name: req.body.name,
//     phone: req.body.phone,
//     email: req.body.email,
//     investment: req.body.investment,
//     message: req.body.message,
//   };
//   console.log(franchiseLeadData);
//   res.render('user/franchise', {
//     title: 'This is form data',
//     successFlag: 'true',
//   });
// });

module.exports = router;
