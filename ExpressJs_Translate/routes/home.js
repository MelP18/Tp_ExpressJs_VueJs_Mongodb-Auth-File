var express = require('express')
var router = express.Router()
const auth = require('../middleware/auth.js')


router.get('/', auth, function(req, res, next){
    const user = req.user
    res.status(200).send(user)
})

module.exports = router