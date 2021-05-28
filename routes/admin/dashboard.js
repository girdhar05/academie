var express = require('express');
const { countDocuments } = require('./../../Models/broucherLead');
const broucherLead = require('./../../Models/broucherLead');
const contactLead = require('./../../Models/contactLead');
const facultyLead = require('./../../Models/facultyLead');
const franchiseLead = require('./../../Models/franchiseLead');
const studentLead = require('./../../Models/studentLead');

var router = express.Router();

var broucherLeadCount;
var contactLeadCount;
var facultyLeadCount;
var franchiseLeadCount;
var studentLeadCount;

router.get('/', (req, res) => {
  franchiseLead.countDocuments().then((count) => {
    franchiseLeadCount = count;
    console.log('franchise = ' + franchiseLeadCount);
  });

  studentLead.countDocuments().then((count) => {
    studentLeadCount = count;
    console.log('studnet = ' + studentLeadCount);
  });

  facultyLead.countDocuments().then((count) => {
    facultyLeadCount = count;
    console.log('faculty = ' + facultyLeadCount);
  });

  contactLead.countDocuments().then((count) => {
    contactLeadCount = count;
    console.log('contact = ' + contactLeadCount);
  });

  broucherLead.countDocuments().then((count) => {
    broucherLeadCount = count;
    console.log('broucher = ' + broucherLeadCount);
  });

  res.render('admin/dashboard', {
    title: 'This is form data',
    broucherLeadCount: String(broucherLeadCount),
    contactLeadCount: String(contactLeadCount),
    facultyLeadCount: String(facultyLeadCount),
    franchiseLeadCount: String(franchiseLeadCount),
    studentLeadCount: String(studentLeadCount),
  });
});

router.post('/', (req, res) => {
  // franchiseLeadCount = countDocuments();
  // console.log('franchise = ' + franchiseLeadCount);
  franchiseLead.countDocuments().then((count) => {
    franchiseLeadCount = count;
    console.log('franchise = ' + franchiseLeadCount);
  });

  studentLead.countDocuments().then((count) => {
    studentLeadCount = count;
    console.log('studnet = ' + studentLeadCount);
  });

  facultyLead.countDocuments().then((count) => {
    facultyLeadCount = count;
    console.log('faculty = ' + facultyLeadCount);
  });

  contactLead.countDocuments().then((count) => {
    contactLeadCount = count;
    console.log('contact = ' + contactLeadCount);
  });

  broucherLead.countDocuments().then((count) => {
    broucherLeadCount = count;
    console.log('broucher = ' + broucherLeadCount);
  });

  res.render('admin/dashboard', {
    title: 'This is form data',
    broucherLeadCount: String(broucherLeadCount),
    contactLeadCount: String(contactLeadCount),
    facultyLeadCount: String(facultyLeadCount),
    franchiseLeadCount: String(franchiseLeadCount),
    studentLeadCount: String(studentLeadCount),
  });
});

module.exports = router;
