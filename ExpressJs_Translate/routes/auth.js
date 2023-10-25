var express = require('express');
var router = express.Router();

const authenticationController = require('../controllers/authentication.controller')


/* GET home page. */
router.post('/signup', authenticationController.registration)
router.post('/signin', authenticationController.connection)
module.exports = router;