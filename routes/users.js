const express = require('express')

const router = express.Router()

const userController = require('../controllers/users')

router.get('/signup', userController.getSignupPage)

router.post('/signup', userController.postSignUpDetails)

router.get('/login', userController.getloginPage)

router.post('/login', userController.postLoginDetail)



module.exports = router