const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const vehicleValidation = require('../../validations/vehicle.validation');
const vehicleController = require('../../controllers/vehicle.controller');

const router = express.Router();



router
  .route('/')
  .get(validate(vehicleValidation.getVehicles),vehicleController.getvahicles);

router
  .route('/:vehicleId')
  .get(validate(vehicleValidation.getVehicle),vehicleController.getVehicle)



module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Vehicles
 *   description: Vehicle management and retrieval
 */

/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Get all vehicles
 *     description: Retrieve all vehicles with optional query parameters for filtering and pagination.
 *     tags: [Vehicles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: location_id
 *         schema:
 *           type: integer
 *         description: Filter by location ID
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: integer
 *         description: Filter by category ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by vehicle name
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: Filter by vehicle description
 *       - in: query
 *         name: price
 *         schema:
 *           type: number
 *           format: float
 *         description: Filter by vehicle price
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Available, Full Booked]
 *         description: Filter by vehicle status
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by field in the form of field:desc/asc (e.g., price:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *         description: Maximum number of vehicles to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *     responses:
 *       "200":
 *         description: A list of vehicles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       image:
 *                         type: array
 *                         items:
 *                           type: string
 *                           format: uri
 *                       location_id:
 *                         type: integer
 *                       category_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *                       price:
 *                         type: number
 *                         format: float
 *                       status:
 *                         type: string
 *                         enum: [Available, Full Booked]
 *                       stock:
 *                         type: integer
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 10
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */