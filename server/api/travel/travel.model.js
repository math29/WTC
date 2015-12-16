'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TravelSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  date_created: { type: Date, default: Date.now },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  budget: Number,
  nbTravellers: Number,
  date_departure: Date,
  date_return: Date,
  month_departure: Date,
  choose_by_dates: Boolean,
  choose_by_month: Boolean,
  personal_interest: {
    playa: { type: Boolean, default: false },
    mountain: { type: Boolean, default: false }
  },
  region_idea: { type: String, default: "" },
  selectedHashtags: [{
    type: Schema.Types.ObjectId,
    ref: 'Hashtag'
  }],
  departure: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  arrival: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }
});

module.exports = mongoose.model('Travel', TravelSchema);