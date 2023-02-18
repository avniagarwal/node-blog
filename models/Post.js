const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  published_date: {
    type: Date
  }
});

module.exports = post = mongoose.model('post', BlogSchema);