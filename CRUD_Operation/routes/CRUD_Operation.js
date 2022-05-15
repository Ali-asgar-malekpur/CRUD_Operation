var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var CRUD_Operation_controller = require('../controllers/CRUD_Operation');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', CRUD_Operation_controller.test);


router.post('/create', CRUD_Operation_controller.CRUD_Operation_create);

router.get('/:id', CRUD_Operation_controller.CRUD_Operation_details);

router.put('/:id/update', CRUD_Operation_controller.CRUD_Operation_update);

router.delete('/:id/delete', CRUD_Operation_controller.CRUD_Operation_delete);


module.exports = router;