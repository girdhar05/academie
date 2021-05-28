const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  occupationType: {
    type: String,
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  expreienceInYear: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('facultyLead', facultySchema);
