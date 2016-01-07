'use strict';

var express = require('express');
var controller = require('./rate.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

/**
 * @apiDefine UserNotAuthorized
 *
 * @apiError User not authenticated
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 *  UnauthorizedError
 */

/**
 * @api {get} /api/back/rate Request list of all rates
 * @apiVersion 1.0.0
 * @apiName GetRates
 * @apiGroup Rates
 *
 * @apiSuccess {Array} array of rates
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  [
 *    {
 *      score:2,
 *      raters: ["568d6f9a3a4b87990fe2ee15", 568d6f9a3a4b87990fe2ee1c]
 *    },
 *    ...
 *  ]
 *
 * @apiUse UserNotAuthorized
 */
router.get('/', auth.hasRole('admin'), controller.index);

/**
 * @api {get} /api/back/rate/:id Request operations with specific ID
 * @apiVersion 1.0.0
 * @apiName GetOperation
 * @apiGroup Operations
 *
 * @apiSuccess {Object} operation
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *    {
 *      score:2,
 *      raters: ["568d6f9a3a4b87990fe2ee15", 568d6f9a3a4b87990fe2ee1c]
 *    }
 *
 * @apiUse UserNotAuthorized
 */
router.get('/:id', auth.isAuthenticated(), controller.show);

/**
 * @api {post} /api/back/rate/vote/:side/:id Request operations with specific ID
 * @apiVersion 1.0.0
 * @apiName GetOperation
 * @apiGroup Operations
 *
 * @apiSuccess {Object} operation
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *    {
 *     'message':'OK'
 *    }
 *
 * @apiUse UserNotAuthorized
 */
router.post('/vote/:side/:id', auth.isAuthenticated(), controller.vote);
/**
 * @api {delete} /api/back/operation/:id delete operation with specific ID
 * @apiVersion 1.0.0
 * @apiName DeleteOperation
 * @apiGroup Operations
 *
 * @apiSuccess {Object} operation
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *
 *
 * @apiUse UserNotAuthorized
 */
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
