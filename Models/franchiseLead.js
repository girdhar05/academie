const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const franchiseSchema = new Schema({
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
  investment: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('franchiseLead', franchiseSchema);
