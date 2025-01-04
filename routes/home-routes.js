const express = require('express');


const router = express.Router();
router.get('/welcome', (req,res)=>{
    res.json({
        message: 'Welcome to the Home Page'
    });
});

module.exports = router;