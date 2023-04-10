const express = require('express');

const allCarsRoute = require('../../controllers/allCars.controller');

const router = express.Router();

router.route("/")
 /**
   * @api {get} /api/v1/allCars
   * @apiDescription Get all the allCars
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
.get(allCarsRoute.getAllCars)
 /**
   * @api {post} /api/v1/allCars
   * @apiDescription Get all the Cars
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
.post(allCarsRoute.postAllCars)

router.route("/:id").get(allCarsRoute.carsDetails)
.patch(allCarsRoute.updateTool)
.delete(allCarsRoute.deleteCar)

module.exports = router;