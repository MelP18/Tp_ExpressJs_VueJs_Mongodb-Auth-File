var express = require('express')
var router = express.Router()
const multer  = require('multer')



const fileController = require('../controllers/file.controller')

var upload = fileController.upload

router.post('/',  upload.single('file'), fileController.addFile)
router.get('/getfile',   fileController.getFile)
module.exports = router