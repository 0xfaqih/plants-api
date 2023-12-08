const mongoose = require('mongoose');

const articleScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  author: {
    type: String,
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Article', articleScheme);
