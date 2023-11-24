const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  common_name: {
    type: String,
    required: true,
  },
  scientific_name: {
    type: [String],
    required: true,
  },
  cycle: String,
  propagation: {
    type: [String],
    required: true,
  },
  sunlight: {
    type: [String],
    required: true,
  },
  pruning_month: {
    type: [String],
    default: [],
  },
  care_guides: String,
  growth_rate: String,
  thorny: {
    type: Boolean,
    default: false,
  },
  invasive: {
    type: Boolean,
    default: false,
  },
  tropical: {
    type: Boolean,
    default: false,
  },
  indoor: {
    type: Boolean,
    default: false,
  },
  care_level: String,
  flowers: {
    type: Boolean,
    default: false,
  },
  fruits: {
    type: Boolean,
    default: false,
  },
  leaf: {
    type: Boolean,
    default: false,
  },
  leaf_color: {
    type: [String],
    default: [],
  },
  cuisine: {
    type: Boolean,
    default: false,
  },
  medicinal: {
    type: Boolean,
    default: false,
  },
  description: String,
  image: {
    regular_url: String,
    medium_url: String,
    small_url: String,
  },
});

module.exports = mongoose.model("Plant", plantSchema);
