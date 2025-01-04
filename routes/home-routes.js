const express = require('express');
const authmiddleware = require('../middleware/auth_middleware');

const router = express.Router();
router.get('/welcome', authmiddleware, (req,res)=>{
    res.json({
        message: 'Welcome to the Home Page'
    });
});

module.exports = router;