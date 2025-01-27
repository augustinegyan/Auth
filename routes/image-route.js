const express = require('express')
const authmiddleware = require('../middleware/auth_middleware')
const adminMiddleware = require('../middleware/admin_middleware')
const uploadMiddleware = require('../middleware/uploadmiddleware')
const {uploadImageController, fetchImagesController } = require('../controllers/imagecontroller')
const router = express.Router()

//upload the image 
router.post('/upload',authmiddleware,adminMiddleware,uploadMiddleware.single('image'),uploadImageController)


// Get all the images
router.get('/get',authmiddleware,fetchImagesController)
module.exports = router 