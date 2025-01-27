const express  = require('express');
const router = express.Router();
const {registerUser, loginUser, changePassword} = require('../controllers/auth_controller')
const authmiddleware = require('../middleware/auth_middleware')

//all Routes are related authenticatio and authorization
router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/change-password',authmiddleware, changePassword)


 


module.exports = router; 
