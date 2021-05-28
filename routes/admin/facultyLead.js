var express = require('express');
const facultyLead = require('../../Models/facultyLead');
var router = express.Router();

router.get('/', (req, res) => {
  facultyLead
    .find()
    .then((savedData) => {
      console.log(savedData);
      res.render('admin/facultyLead', {
        lead: savedData,
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

router.post('/', (req, res) => {
  let facultyLeadData = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    occupationType: req.body.occupationType,
    highestQualification: req.body.highestQualification,
    expreienceInYear: req.body.expreienceInYear,
    resume: req.body.resume,
  };

  let FacultyLead = new facultyLead(facultyLeadData);

  FacultyLead.save()
    .then((savedData) => {
      console.log(savedData);
      res.render('user/faculty', {
        title: 'This is form data',
        successFlag: 'true',
      });
    })
    .catch((err) => {
      console.log('error in saving the data');
    });
});

module.exports = router;
