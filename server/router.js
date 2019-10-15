const AuthController = require('./controllers/AuthenticationController')
const AuthControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('I am running');
})

router.post('/register', AuthControllerPolicy.register, AuthController.register)
router.post('/login', AuthController.login)

//displaying songs
router.get('/songs', SongsController.index)
router.post('/songs', SongsController.post)
// 
module.exports = router