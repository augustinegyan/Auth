const express  = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth_controller')

//all Routes are related authenticatio and authorization
router.post('/register',registerUser);
router.post('/login',loginUser);






module.exports = router; 
