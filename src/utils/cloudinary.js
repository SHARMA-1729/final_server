import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error('Local file path is missing');
        }

        console.log('Uploading file:', localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });

        if (!response || !response.url) {
            throw new Error('Failed to upload file to Cloudinary');
        }

        console.log('File uploaded successfully:', response.url);
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary file

        return response;
    } catch (error) {
        console.error('Cloudinary upload error:', error.message);
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary file on error
        return null;
    }
};

export { uploadOnCloudinary };



