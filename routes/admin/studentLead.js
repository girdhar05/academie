var express = require('express');
const studentLead = require('../../Models/studentLead');
var router = express.Router();

router.get('/', (req, res) => {
  studentLead
    .find()
    .then((savedData) => {
      console.log(savedData);
      res.render('admin/studentLead', {
        lead: savedData,
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

router.post('/', (req, res) => {
  let studentLeadData = {
    name: req.body.name,
    dob: req.body.dob,
    phone: req.body.phone,
    email: req.body.email,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    message: req.body.message,
    course: req.body.course,
  };

  let StudentLead = new studentLead(studentLeadData);

  StudentLead.save()
    .then((savedData) => {
      console.log(savedData);
      res.render('user/enrollNow', {
        successflag: 'true',
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

module.exports = router;
