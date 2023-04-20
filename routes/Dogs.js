var express = require('express');
const Dogs_controllers= require('../controllers/Dogs');
var router = express.Router();
/* GET costumes */
router.get('/', Dogs_controllers.Dogs_view_all_Page );
router.get('/detail', Dogs_controllers.Dogs_view_one_Page);
/* GET create costume page */
router.get('/create', Dogs_controllers.Dogs_create_Page);
/* GET create update page */
router.get('/update', Dogs_controllers.Dogs_update_Page);
/* GET delete costume page */
router.get('/delete', Dogs_controllers.Dogs_delete_Page);

module.exports = router;
