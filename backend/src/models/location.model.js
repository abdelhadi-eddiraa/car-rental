const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const locationSchema = mongoose.Schema(
  {
    
    name_location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
   
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
// locationSchema.plugin(toJSON);
locationSchema.plugin(paginate);

/**
 * @typedef Vehicle
 */
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
