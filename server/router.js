const AuthController = require('./controllers/AuthenticationController')
const AuthControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('I am running');
})

router.post('/register', AuthControllerPolicy.register, AuthController.register)

module.exports = router