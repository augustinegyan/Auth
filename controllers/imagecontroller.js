const Image = require('../models/Image')
const {uploadCloudinary} = require('../helpers/cloudinary_helper')

const uplooadImage = async(req,res)=>{
    try {
        //check if file is missing 
        if(!req.file){
            return res.status(400).json({
                sucess:false,
                message: 'File is required. Please upload an Iimage'
            })
        }

        //upload to cloudinary
        const {url,publicId}= await uploadCloudinary(req.file.path)

        //store the Image Url and publicId 
        const newlyUploadedImage = new Image ({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })
        
        await newlyUploadedImage.save();
        res.status(201).json({
            success: true,
            message: "Image uploaded sucessfully",
            image : newlyUploadedImage
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}


module.exports = {
    uplooadImage,
}