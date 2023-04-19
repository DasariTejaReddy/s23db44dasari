var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Dogs_controller = require('../controllers/Dogs');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Dogs ROUTES ///
// POST request for creating a Dogs.
router.post('/Dogs', Dogs_controller.Dogs_create_post);
// DELETE request to delete Dogs.
router.delete('/Dogs/:id', Dogs_controller.Dogs_delete);
// PUT request to update Dogs.
router.put('/Dogs/:id', Dogs_controller.Dogs_update_put);
// GET request for one Dogs.
router.get('/Dogs/:id', Dogs_controller.Dogs_detail);
// GET request for list of all Dogs items.
router.get('/Dogs', Dogs_controller.Dogs_list);
/* GET detail costume page */
router.get('/detail', Dogs_controller.Dogs_view_one_Page);
module.exports = router;