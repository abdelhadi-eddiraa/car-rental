const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const vehicleValidation = require('../../validations/vehicle.validation');
const locationController = require('../../controllers/loaction.controller');

const router = express.Router();



router
  .route('/')
  .get(locationController.getLocations);

// router
//   .route('/:vehicleId')
//   .get(validate(vehicleValidation.getVehicle),vehicleController.getVehicle)



module.exports = router;