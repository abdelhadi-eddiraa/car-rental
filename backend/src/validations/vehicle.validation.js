const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

// const createUser = {
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().custom(password),
//     name: Joi.string().required(),
//     role: Joi.string().required().valid('user', 'admin'),
//   }),
// };

const getVehicles = Joi.object({
    location_id: Joi.number().required(),
    category_id: Joi.number().required(),
    name: Joi.string().max(50).required(),
    description: Joi.string().max(150).required(),
    price: Joi.number().required(),
    status: Joi.string().valid('Available', 'Full Booked').required(),
    image: Joi.array().items(Joi.string().uri()).required(),
    stock: Joi.number().required(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  });




  const getVehicle = {
    params: Joi.object().keys({
          vehicleId: Joi.string().custom(objectId),
      }),
  };

// const getVehicles = {
//   query: Joi.object().keys({
//     location_id: Joi.number().required(),
//     category_id: Joi.number().required(),
//     name: Joi.string().max(50).required(),
//     description: Joi.string().max(150).required(),
//     price: Joi.number().required(),
//     status: Joi.string().valid('Available', 'Full Booked').required(),
//     image: Joi.array().items(Joi.string().uri()).required(),
//     stock: Joi.number().required(),
//     // sortBy: Joi.string(),
//     // limit: Joi.number().integer(),
//     // page: Joi.number().integer(),
//   }),
// };

// const getUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
    getVehicles,
    getVehicle
};
