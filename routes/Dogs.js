var express = require('express');
const Dogs_controllers= require('../controllers/Dogs');
var router = express.Router();
/* GET costumes */
router.get('/', Dogs_controllers.Dogs_view_all_Page );
router.get('/detail', Dogs_controllers.Dogs_view_one_Page);
/* GET create costume page */
router.get('/create', Dogs_controllers.Dogs_create_Page);
module.exports = router;
