const cloudinary =  require('../config/cloudinary')

const upcloadToCloudinary = async(filePath)=>{
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return{
            url: result.secure_url,
            publicId: result.public_id,
        }
    } catch (error) {
        console.error('Error while uploading to cloudincary',error)
    }
}

module.exports = {
    uploadCloudinary 
}