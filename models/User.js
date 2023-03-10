const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  blogs: {
    type: String,
    required: true
  }
});

module.exports = user = mongoose.model('user', UserSchema);