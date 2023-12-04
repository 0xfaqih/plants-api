const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  common_name: {
    type: String,
    required: true,
  },
  scientific_name: {
    type: String,
    required: true,
  },
  place: {
    type: [String],
    required: true,
  },
  sunlight: {
    type: [String],
    required: true,
  },
  growth: {
    type: String,
    required: true,
  },
  care_level: String,
  management: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  manage_type: {
    type: String,
    required: true,
  },
  image: {
    regular_url: String,
    medium_url: String,
    small_url: String,
  },
});

module.exports = mongoose.model('Plant', plantSchema);
