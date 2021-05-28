const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  subHeader: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('new', newsSchema);
